'use strict';

const Translator = require('../components/translator.js');
const allWords = require('../components/allWords.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text } = req.body;
      const { locale } = req.body;
      const americanOnlyArr = allWords.americanOnlyArr;
      const britishOnlyArr = allWords.britishOnlyArr;
      const americanToBritishSpellingArr = allWords.americanToBritishSpellingArr;
      const americanToBritishTitlesArr = allWords.americanToBritishTitlesArr;

        
      if (!locale)
      {return res.json({ error: 'Required field(s) missing' })}

      if (!text)
        {return res.json({ error: 'No text to translate' })}

      if (locale !== "american-to-british" && locale !== "british-to-american")
        {return res.json({ error: 'Invalid value for locale field' })}

      //If text requires no translation, return "Everything looks good to me!"

      const shouldTranslate = translator.noNeed(text, locale)

      console.log(shouldTranslate + " should");
      if (shouldTranslate === "British words found")
      {
        let resObj = { text: text, translation: translator.britishToAmerican(text) }
      return res.json(resObj)
      }
      
      if (shouldTranslate === "American words found")
        {console.log("move to highlighting American")
        //translator.americanToBritish(text)
      }

      if (shouldTranslate === "No British words found" && shouldTranslate === "No American words found")
      {res.json("Everything looks good to me!")}


    }); //end post request
};

/*
2. You can POST to /api/translate with a body containing text with the text to translate and locale with either american-to-british or british-to-american. The returned object should contain the submitted text and translation with the translated text.

3. The /api/translate route should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English. The span element should wrap the entire time string, i.e. <span class="highlight">10:30</span>.

4. The /api/translate route should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English. See /components/american-to-british-titles.js for the different titles your application should handle.

5. Wrap any translated spelling or terms with <span class="highlight">...</span> tags so they appear in green.
6. If one or more of the required fields is missing, return { error: 'Required field(s) missing' }.

7. If text is empty, return { error: 'No text to translate' }

8. If locale does not match one of the two specified locales, return { error: 'Invalid value for locale field' }.

9. If text requires no translation, return "Everything looks good to me!" for the translation value.
*/