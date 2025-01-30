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

let textArr = text.split(" ")

//below checks for all matching words!
    //hightlight and translate these
let checkAmericanArr = Array.from(allAmerican).filter(word => textArr.includes(word));

//returns words that DO NOT match British only words
    //do not highlight or translate these
let cleanArray = textArr.filter(element => checkAmericanArr.every(item => !element.includes(item)));
    if (checkAmericanArr.length === 0) 
        {return "No American words found"}
    else {return "American words found"}

console.log(checkAmericanArr);
console.log(cleanArray);}



if (locale === 'british-to-american') {


//arr of all possible american words to translate
let allBritish = Object.keys(britishOnly).concat(Object.values(americanToBritishSpelling), Object.values(americanToBritishTitles));


let textArr = text.split(" ");

//below checks for all matching words!
    //hightlight and translate these
let checkBritishArr = Array.from(allBritish).filter(word => textArr.includes(word));

//returns words that DO NOT match British only words
    //do not highlight or translate these
let cleanArray = textArr.filter(element => checkBritishArr.every(item => !element.includes(item)));


console.log(checkBritishArr, checkBritishArr.length);
console.log(cleanArray, cleanArray.length);


    if (checkBritishArr.length === 0) 
        {return "No British words found"}

    else {return "British words found"}
}

}


americanToBritish(text) {
//amerian objects if needed later, shortened for use in other functions
    //let americanOnlyObj = Object.keys(americanOnly);
    //let americanSpellingObj = Object.keys(americanToBritishSpelling);
    //let americanTitlesObj = Object.keys(americanToBritishTitles);

//arr of all possible american words to translate
let allAmerican = Object.keys(americanOnly).concat(Object.keys(americanToBritishSpelling), Object.keys(americanToBritishTitles));

let textArr = text.split(" ")

//below checks for all matching words!
    //hightlight and translate these
let checkAmericanArr = Array.from(allAmerican).filter(word => textArr.includes(word));

//returns words that DO NOT match British only words
    //do not highlight or translate these
let cleanArray = textArr.filter(element => checkAmericanArr.every(item => !element.includes(item)));


console.log(checkAmericanArr);
console.log(cleanArray);


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

britishToAmerican(text) {

 let britishWordArr = []   
//arr of all possible american words to translate
let allBritish = Object.keys(britishOnly).concat(Object.values(americanToBritishSpelling), Object.values(americanToBritishTitles));

let textArr = text.split(" ")

//below checks for all matching words!
    //hightlight and translate these
let checkBritishArr = Array.from(allBritish).filter(word => textArr.includes(word));
//text that does need translation

let resArr = []

checkBritishArr.forEach(word => { 
 //get keys/values, get rid of null, then push to resArr
    //push to text??
    //new text with regular span on each side and then addd highlighted word in span?
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
//resArr.push(this.getValueWithKey(britishOnly, word))
console.log(resArr);
//restArr[0][0] === initial word, resArr[0][1] === translated word
let i = 0;
let resObj = Object.fromEntries(resArr);
console.log(resObj);

for (const [key, value] of Object.entries(resObj)) {
    const regIt = new RegExp(key, 'gi');
    if (regIt.test(text)) {
        text = text.replace(regIt, value);
        i++;
    }
}
console.log(text)



//console.log(textArr)
//returns words that DO NOT match British only words
    //do not highlight or translate these
let cleanArray = textArr.filter(element => checkBritishArr.every(item => !element.includes(item)));

//clean array is all text that doesn't need translation

// start find obj for translation

let checkBritishOnly = Array.from(Object.keys(britishOnly)).filter(word => textArr.includes(word));


let checkBritishSpellingOnly = Array.from(Object.values(americanToBritishSpelling)).filter(word => textArr.includes(word));


let checkBritishTitlesOnly = Array.from(Object.values(americanToBritishTitles)).filter(word => textArr.includes(word));



if (checkBritishOnly.length === 0) 
    {console.log("Check British Only === 0") }
if (checkBritishSpellingOnly.length === 0) 
    {console.log("Check British Spelling Only === 0") }
if (checkBritishTitlesOnly.length === 0) 
    {console.log("Check British Titles Only === 0") }

//let finalText = `<span>${text}</span>`;
else {return text}

}


}

module.exports = Translator;