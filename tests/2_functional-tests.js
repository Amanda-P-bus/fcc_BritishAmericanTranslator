const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

/* start comment holder

//1. Translation with text and locale fields: POST request to /api/translate
test('Translation with text and locale fields', (done) => {
    
    done();
})

//2. Translation with text and invalid locale field: POST request to /api/translate
test('Translation with invalid locale field', (done) => {
        
    done();
})

//3. Translation with missing text field: POST request to /api/translate
test('Translation with missing text field', (done) => {
        
    done();
})

//4. Translation with missing locale field: POST request to /api/translate
test('Translation with missing locale field', (done) => {        
  
    done();
})

//5. Translation with empty text: POST request to /api/translate
test('Translation with empty text', (done) => {
        
    done();
})

//6. Translation with text that needs no translation: POST request to /api/translate
test('Translation with text that needs no translation', (done) => {
        
    done();
})
    */  //end comment holder

});  //end functional tests


