"use strict";

const {
  registerSuite
} = intern.getInterface('object');
const {
  assert
} = intern.getPlugin('chai');
console.log('before registerSuite');

const keys = require('@theintern/leadfoot/keys');

registerSuite('Todo (functional)', {
  'submit form'() {
    console.log('submit form');
    const result = this.remote // .get('/index.html2')
    .get(pathToUrl(__dirname, 'assets/index.html')) // .findByCssSelector('.new-toodo')
    // .type('Task 1')
    // .type(keys.RETURN)
    // .type('Task 2')
    // .type(keys.RETURN)
    // .type('Task 3')
    // .getSpecAttribute('value')
    .then(value => {
      console.log(value);
    });
    return result;
  }

});
console.log('after registerSuite');