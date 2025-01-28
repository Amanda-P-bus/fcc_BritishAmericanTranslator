const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
const allWords = require('./allWords.js')

//

class Translator {
noNeed(text, locale) {

//amerian objects
const americanOnlyObj = Object.keys(americanOnly);
const americanSpellingObj = Object.keys(americanToBritishSpelling);
const americanTitlesObj = Object.keys(americanToBritishTitles);

//british objects
const britishOnlyObj = Object.keys(britishOnly);
const britishSpellingObj = Object.values(americanToBritishSpelling);
const britishTitlesObj = Object.values(americanToBritishTitles);


if (locale === 'american-to-british') {



//arr of all possible american words to translate
const allAmerican = americanOnlyObj.concat(americanSpellingObj, americanTitlesObj);

let textArr = text.split(" ")

//below checks for all matching words!
    //hightlight and translate these
let checkAmericanArr = Array.from(allAmerican).filter(word => textArr.includes(word));

//returns words that DO NOT match British only words
    //do not highlight or translate these
let cleanArray = textArr.filter(element => checkAmericanArr.every(item => !element.includes(item)));


console.log(checkAmericanArr);
console.log(cleanArray);}

/*
    if (americanOnlyIncludes === true)
    {console.log("On American Only sheet")}
    
   else if (americanSpellingIncludes === true)
    {console.log("On American Spelling sheet")}

   else if (americanTitlesIncludes === true) 
        {console.log("On American Titles sheet")}

    else { console.log("not american") }
}
*/

if (locale === 'british-to-american') {


//arr of all possible american words to translate
const allBritish = britishOnlyObj.concat(britishSpellingObj, britishTitlesObj);

let textArr = text.split(" ")

//below checks for all matching words!
    //hightlight and translate these
let checkBritishArr = Array.from(allBritish).filter(word => textArr.includes(word));

//returns words that DO NOT match British only words
    //do not highlight or translate these
let cleanArray = textArr.filter(element => checkBritishArr.every(item => !element.includes(item)));


console.log(checkBritishArr, checkBritishArr.length);
console.log(cleanArray, cleanArray.length);

    if (checkBritishArr.length === 0) 
        {return "No words found to translate"}

    else {return cleanArray}
}
 /*
    if (britishOnlyIncludes === true)
    {console.log("On British Only sheet")}

    else if (britishSpellingIncludes === true)
    {console.log("On British Spelling sheet")}

   else if (britishTitlesIncludes === true)
        {console.log("On British Titles sheet")}

   else { console.log("not british") }
}
*/
//else { console.log("not american or british") }
 
//if locale = american-to-british    
 //for loop to create arr of just american and just british words? 

//loop through here?
}

shouldHighlight(text, _cleanArray) {

console.log(this.cleanArray + "ugh")
//make text array, split it, then loop through to check each imported list?
}
americanToBritish(text) {}

britishToAmerican(text) {}


}

module.exports = Translator;