const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {


//1. Translation with text and locale fields: POST request to /api/translate
test('Translation with text and locale fields', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "I had a bicky then went to the chippy.",
      locale: "british-to-american",
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(
        res.body.translation,
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
      );
      done();
    });
})

//2. Translation with text and invalid locale field: POST request to /api/translate
test('Translation with invalid locale field', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "I had a bicky then went to the chippy.",
      locale: "british-to-british",
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.body.error, "Invalid value for locale field");
      done();
    });
})

//3. Translation with missing text field: POST request to /api/translate
test('Translation with missing text field', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      locale: "british-to-american",
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.body.error, "Required field(s) missing");
      done();
    });
})

//4. Translation with missing locale field: POST request to /api/translate
test('Translation with missing locale field', (done) => {        
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "I had a bicky then went to the chippy.",
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.body.error, "Required field(s) missing");
      done();
    });
})

//5. Translation with empty text: POST request to /api/translate
test('Translation with empty text', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "",
      locale: "british-to-american",
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.body.error, "No text to translate");
      done();
    });
})

//6. Translation with text that needs no translation: POST request to /api/translate
test('Translation with text that needs no translation', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "I had a bicky then went to the chippy.",
      locale: "american-to-british",
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.body.translation, "Everything looks good to me!");
      done();
    });
});

});  //end functional tests


