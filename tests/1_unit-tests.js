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

//2. Translate I ate yogurt for breakfast. to British English
test('Translate I ate yogurt for breakfast.', function (done) {
    assert.equal(
        translator.americanToBritish("I ate yogurt for breakfast."),
        "I ate <span class=\"highlight\">yoghurt</span> for breakfast."
      );
      done();
})

//3. Translate We had a party at my friend's condo. to British English
test('Translate We had a party at my friend\'s condo.', function (done) {
    assert.equal(translator.americanToBritish('We had a party at my friend\'s condo'), 'We had a party at my friend\'s <span class=\"highlight\">flat</span>');
    done();
})

//4. Translate Can you toss this in the trashcan for me? to British English
test('Translate Can you toss this in the trashcan for me?', function (done) {
    assert.equal(translator.americanToBritish('Can you toss this in the trashcan for me?'), 'Can you toss this in the <span class=\"highlight\">rubbish</span>can for me?');

    done();
})

//5. Translate The parking lot was full. to British English
test('Translate The parking lot was full.', function (done) {
    assert.equal(translator.americanToBritish('The parking lot was full'), 'The <span class=\"highlight\">car park</span> was full');

    done();
})

//6. Translate Like a high tech Rube Goldberg machine. to British English
test('Translate Like a high tech Rube Goldberg machine.', function (done) {
    assert.equal(translator.americanToBritish('Like a high tech rube goldberg machine.'), 'Like a high tech <span class=\"highlight\">Heath Robinson device</span>.')
    done();
})

//7. Translate To play hooky means to skip class or work. to British English
test('Translate To play hooky means to skip class or work.', function (done) {
    assert.equal(translator.americanToBritish('To play hooky means to skip class or work.'), 'To <span class=\"highlight\">bunk off</span> means to skip class or work.');
    done();
})

//8. Translate No Mr. Bond, I expect you to die. to British English
test('Translate No Mr. Bond, I expect you to die.', function (done) {
    assert.equal(translator.americanToBritish('No Mr. Bond, I expect you to die.'), 'No <span class=\"highlight\">Mr </span>Bond, I expect you to die.');

    done();
})

//9. Translate Dr. Grosh will see you now. to British English
test('Translate Dr. Grosh will see you now.', function (done) {
    assert.equal(translator.americanToBritish('Dr. Grosh will see you now.'), '<span class=\"highlight\">Dr</span> Grosh will see you now.');
    done();
})

//10. Translate Lunch is at 12:15 today. to British English
test('Translate Lunch is at 12:15 today.', function (done) {
    assert.equal(translator.americanToBritish('Lunch is at 12:15 today.'), 'Lunch is at <span class=\"highlight\">12.15</span> today.');
    done();
})
 //end translate to american english comment holder


    }); //end translate to British English

//start translate to American English    
suite('English: From British to American', () => {


//11. Translate We watched the footie match for a while. to American English
test('Translate We watched the footie match for a while.', function (done) {
    assert.equal(translator.britishToAmerican('We watched the footie match for a while'), 'We watched the <span class=\"highlight\">soccer</span> match for a while');
    done();
})

//12. Translate Paracetamol takes up to an hour to work. to American English
test('Translate Paracetamol takes up to an hour to work.', function (done) {
    assert.equal(translator.britishToAmerican("Paracetamol takes up to an hour to work"), '<span class=\"highlight\">Tylenol</span> takes up to an hour to work');
    done();
})

//13. Translate First, caramelise the onions. to American English
test('Translate First, caramelise the onions.', function (done) {
    assert.equal(translator.britishToAmerican('First, caramelise the onions'), 'First, <span class=\"highlight\">caramelize</span> the onions');
    done();
})

//14. Translate I spent the bank holiday at the funfair. to American English
test('Translate I spent the bank holiday at the funfair.', function (done) {
    assert.equal(translator.britishToAmerican('I spent the bank holiday at the funfair'), 'I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>');
    done();
})

//15. Translate I had a bicky then went to the chippy. to American English
test('Translate I had a bicky then went to the chippy.', function (done) {
    assert.equal(translator.britishToAmerican('I had a bicky then went to the chippy'), 'I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>');
    done();
})

//16. Translate I've just got bits and bobs in my bum bag. to American English
test('Translate I\'ve just got bits and bobs in my bum bag.', function (done) {
    assert.equal(translator.britishToAmerican("I've just got bits and bobs in my bum bag"), 'I\'ve just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>');
    done();
})

//17. Translate The car boot sale at Boxted Airfield was called off. to American English
test('Translate The car boot sale at Boxted Airfield was called off.', function (done) {
    assert.equal(translator.britishToAmerican('The car boot sale at Boxted Airfield was called off'), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off');
    done();
})

//18. Translate Have you met Mrs Kalyani? to American English
test('Translate Have you met Mrs Kalyani?', function (done) {
    assert.equal(translator.britishToAmerican('Have you met Mrs Kalyani?'), 'Have you met <span class="highlight">Mrs. </span>Kalyani?');
    done();
})

//19. Translate Prof Joyner of King's College, London. to American English
test('Translate Prof Joyner of King\'s College, London.', function (done) {
    assert.equal(translator.britishToAmerican('Prof Joyner of King\'s College, London'), '<span class="highlight">Prof.</span> Joyner of King\'s College, London');
    done();
})

//20. Translate Tea time is usually around 4 or 4.30. to American English
test('Translate Tea time is usually around 4 or 4.30.', function (done) {
    assert.equal(translator.britishToAmerican('Tea time is usually around 4 or 4.30'), 'Tea time is usually around 4 or <span class="highlight">4:30</span>');
    done();
})




}); //end translate to American English


//start Highlight Translation   
suite('Highlight differences in translation', () => {


//21. Highlight translation in Mangoes are my favorite fruit.
test('Highlight translation in Mangoes are my favorite fruit.', function (done) {
    assert.equal(translator.americanToBritish('Mangoes are my favorite fruit.'), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    done();
})

//22. Highlight translation in I ate yogurt for breakfast.
test('Highlight translation in I ate yogurt for breakfast.', function (done) {
    assert.equal(
        translator.americanToBritish("I ate yogurt for breakfast."),
        "I ate <span class=\"highlight\">yoghurt</span> for breakfast."
      );
      done();
})

//23. Highlight translation in We watched the footie match for a while.
test('Highlight translation in We watched the footie match for a while.', function (done) {
    assert.equal(translator.britishToAmerican('We watched the footie match for a while'), 'We watched the <span class=\"highlight\">soccer</span> match for a while');
    done();
})

//24. Highlight translation in Paracetamol takes up to an hour to work.
test('Highlight translation in Paracetamol takes up to an hour to work.', function (done) {   
    assert.equal(translator.britishToAmerican("Paracetamol takes up to an hour to work"), '<span class=\"highlight\">Tylenol</span> takes up to an hour to work');
    done();

})



}); //end highlight translation
    


});  //end all tests
