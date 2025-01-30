let americanOnly = require('./american-only.js');
let americanToBritishSpelling = require('./american-to-british-spelling.js');
let americanToBritishTitles = require("./american-to-british-titles.js")
let britishOnly = require('./british-only.js')
let allWords = require('./allWords.js')


class Translator {
noNeed(text, locale) {

if (locale === 'american-to-british') {

//arr of all possible american words to translate
let allAmerican = Object.keys(americanOnly).concat(Object.keys(americanToBritishSpelling), Object.keys(americanToBritishTitles));

//below checks for all matching words!
    //hightlight and translate these

let checkAmericanArr = Array.from(allAmerican).filter(word => text.includes(word))

//returns words that DO NOT match British only words
    //do not highlight or translate these
//let cleanArray = textArr.filter(element => checkAmericanArr.every(item => !element.includes(item)));

    if (checkAmericanArr.length === 0 && !(/(\d?\d)\:(\d\d?)/g).test(text)) 
        {return false}
    
    else {return true}
}

if (locale === 'british-to-american') {


//arr of all possible american words to translate
let allBritish = Object.keys(britishOnly).concat(Object.values(americanToBritishSpelling), Object.values(americanToBritishTitles));



//below checks for all matching words!
    //hightlight and translate these
let checkBritishArr = Array.from(allBritish).filter(word => text.includes(word));

//returns words that DO NOT match British only words
    //do not highlight or translate these
//let cleanArray = textArr.filter(element => checkBritishArr.every(item => !element.includes(item)));


    if (checkBritishArr.length === 0 && !(/(\d?\d)\.(\d\d?)/g).test(text))
           { return false}


    else {return true}
}
}

getValueWithKey(obj, targetValues) {

    for (const [key, value] of Object.entries(obj)) {
      if (key === targetValues) {
        return [key, `<span class="highlight">${value}</span>`];
      }
    }
    return null; // Return null if no match is found
  }
  getKeyWithValue(obj, targetValues) {

    for (const [key, value] of Object.entries(obj)) {
 
      if (value === targetValues)
      {return [value, `<span class="highlight">${key}</span>`] }
    }
    return null; // Return null if no match is found
  }

americanToBritish(text) {

if (/(\d?\d)\:(\d\d?)/g)
    {text = text.replace(/(\d?\d)\:(\d\d?)/g, `<span class="highlight">$1.$2</span>`) } 


let resArr = []
let textArr = text.split("")

//arr of all possible american words to translate
let allAmerican = Object.keys(americanOnly).concat(Object.keys(americanToBritishSpelling), Object.keys(americanToBritishTitles));

let firstCheck = Array.from(allAmerican).filter(word => text.includes(word))

//below checks for all matching words in textArr!
let checkAmericanArr = Array.from(allAmerican).filter(word => textArr.includes(word));


console.log(firstCheck, checkAmericanArr);

  firstCheck.forEach(word => { 

    let americanOnlyCheck = this.getValueWithKey(americanOnly, word);
    
      if (americanOnlyCheck!== null)
        {resArr.push(americanOnlyCheck);}

    let americanSpellingCheck = this.getValueWithKey(americanToBritishSpelling, word);

      if (americanSpellingCheck!== null)
        {resArr.push(americanSpellingCheck);}

    let americanTitleCheck = this.getValueWithKey(americanToBritishTitles, word);

      if (americanTitleCheck!== null)
        {resArr.push(americanTitleCheck);}

  })

let i =0;
let resObj = Object.fromEntries(resArr);

  for (const [key, value] of Object.entries(resObj))
  {
    const regAm = new RegExp(key, 'gi');
      if (regAm.test(text))
        {text = text.replace(regAm, value);
            i++;
        } 
  }

//below individually checks each js sheet, returning an error if somehow making it to americantoBritish  when noNeed === true and no words to translate are found

let checkAmericanOnly = Array.from(Object.keys(americanOnly)).filter(word => textArr.includes(word));
let checkAmericanSpelling = Array.from(Object.keys(americanToBritishSpelling)).filter(word => textArr.includes(word));
let checkAmericanTitles = Array.from(Object.keys(americanToBritishTitles)).filter(word => textArr.includes(word));

if (checkAmericanOnly.length === 0 && checkAmericanSpelling === 0 && checkAmericanTitles === 0) 
    {console.log("Shouldn't have made it here American")}

return text
}


britishToAmerican(text) {

if (/(\d?\d)\.(\d\d?)/g)
    {text = text.replace(/(\d?\d)\.(\d\d?)/g, `<span class="highlight">$1:$2</span>`) }  

//arr of all possible British words to translate
let allBritish = Object.keys(britishOnly).concat(Object.values(americanToBritishSpelling), Object.values(americanToBritishTitles));

let textArr = text.split("");

//returns all matching words needing translation
let checkBritishArr = Array.from(allBritish).filter(word => text.includes(word));


//goes through words to translate, returns key, value pair with spans added to translated values

checkBritishArr.forEach(word => { 

let britOnlyCheck = this.getValueWithKey(britishOnly, word);
    if (britOnlyCheck!== null)
    {
        resArr.push(britOnlyCheck);
    }

let britSpellingCheck = this.getKeyWithValue(americanToBritishSpelling, word);
    if (britSpellingCheck!== null)
    {
        resArr.push(britSpellingCheck); }

let britTitleCheck = this.getKeyWithValue(americanToBritishTitles, word);
    if (britTitleCheck !== null)
    {
        resArr.push(britTitleCheck)}
})

let i = 0;
let resObj = Object.fromEntries(resArr);

for (const [key, value] of Object.entries(resObj)) {
    const regBrit = new RegExp(key, 'gi');
    if (regBrit.test(text)) {
        text = text.replace(regBrit, value);
        i++;
    }
}

//below individually checks each js sheet, returning an error if somehow making it to britishToAmerican when noNeed === true and no words to translate are found

let checkBritishOnly = Array.from(Object.keys(britishOnly)).filter(word => textArr.includes(word));

let checkBritishSpellingOnly = Array.from(Object.values(americanToBritishSpelling)).filter(word => textArr.includes(word));

let checkBritishTitlesOnly = Array.from(Object.values(americanToBritishTitles)).filter(word => textArr.includes(word));


if (checkBritishOnly.length === 0 && checkBritishSpellingOnly.length === 0 && checkBritishTitlesOnly.length === 0) 
    {console.log("Shouldn't have made it here British") }

return text

}

}

module.exports = Translator;