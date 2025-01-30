const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
//start translate to British English    
    suite('English: From American to British', () => {

//start translate to British comment holder
//1. Translate Mangoes are my favorite fruit. to British English
test('Translate Mangoes are my favorite fruit.', function (done) {
    assert.equal(translator.americanToBritish('Mangoes are my favorite fruit.'), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    done();
})
/*
//2. Translate I ate yogurt for breakfast. to British English
test('Translate I ate yogurt for breakfast.', function (done) {

    done();
})

//3. Translate We had a party at my friend's condo. to British English
test('Translate We had a party at my friend\'s condo.', function (done) {
    
    done();
})

//4. Translate Can you toss this in the trashcan for me? to British English
test('Translate Can you toss this in the trashcan for me?', function (done) {

    done();
})

//5. Translate The parking lot was full. to British English
test('Translate The parking lot was full.', function (done) {

    done();
})

//6. Translate Like a high tech Rube Goldberg machine. to British English
test('Translate Like a high tech Rube Goldberg machine.', function (done) {

    done();
})

//7. Translate To play hooky means to skip class or work. to British English
test('Translate Like a high tech Rube Goldberg machine.', function (done) {

    done();
})

//8. Translate No Mr. Bond, I expect you to die. to British English
test('Translate No Mr. Bond, I expect you to die.', function (done) {

    done();
})

//9. Translate Dr. Grosh will see you now. to British English
test('Translate Dr. Grosh will see you now.', function (done) {

    done();
})

//10. Translate Lunch is at 12:15 today. to British English
test('Translate Lunch is at 12:15 today.', function (done) {

    done();
})
*/ //end translate to american english comment holder


    }); //end translate to British English

//start translate to American English    
suite('English: From British to American', () => {

/*  start translate to American English comment holder

//11. Translate We watched the footie match for a while. to American English
test('Translate We watched the footie match for a while.', function (done) {

    done();
})

//12. Translate Paracetamol takes up to an hour to work. to American English
test('Translate Paracetamol takes up to an hour to work.', function (done) {

    done();
})

//13. Translate First, caramelise the onions. to American English
test('Translate First, caramelise the onions.', function (done) {

    done();
})

//14. Translate I spent the bank holiday at the funfair. to American English
test('Translate I spent the bank holiday at the funfair.', function (done) {

    done();
})

//15. Translate I had a bicky then went to the chippy. to American English
test('Translate I had a bicky then went to the chippy.', function (done) {

    done();
})

//16. Translate I've just got bits and bobs in my bum bag. to American English
test('Translate I\'ve just got bits and bobs in my bum bag.', function (done) {

    done();
})

//17. Translate The car boot sale at Boxted Airfield was called off. to American English
test('Translate The car boot sale at Boxted Airfield was called off.', function (done) {

    done();
})

//18. Translate Have you met Mrs Kalyani? to American English
test('Translate Have you met Mrs Kalyani?', function (done) {

    done();
})

//19. Translate Prof Joyner of King's College, London. to American English
test('Translate Prof Joyner of King\'s College, London.', function (done) {

    done();
})

//20. Translate Tea time is usually around 4 or 4.30. to American English
test('Translate Tea time is usually around 4 or 4.30.', function (done) {
  
    done();
})

*/ //end translate to american english comment holder


}); //end translate to American English


//start Highlight Translation   
suite('Highlight differences in translation', () => {

/* start hightlight comment holder

//21. Highlight translation in Mangoes are my favorite fruit.
test('Highlight translation in Mangoes are my favorite fruit.', function (done) {
    
    done();
})

//22. Highlight translation in I ate yogurt for breakfast.
test('Highlight translation in I ate yogurt for breakfast.', function (done) {

    done();
})

//23. Highlight translation in We watched the footie match for a while.
test('Highlight translation in We watched the footie match for a while.', function (done) {

    done();
})

//24. Highlight translation in Paracetamol takes up to an hour to work.
test('Highlight translation in Paracetamol takes up to an hour to work.', function (done) {

    done();
})

*/ //end highlight comment holder


}); //end highlight translation
    


});  //end all tests
