"use strict";

const {
  registerSuite
} = intern.getInterface('object');
const {
  assert
} = intern.getPlugin('chai');

const keys = require('@theintern/leadfoot/keys');

registerSuite('Todo (functional)', {
  'submit form'() {
    console.log('submit form'); // docs: https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1

    return this.remote // .get('/index.html2')
    .get(pathToUrl(__dirname, 'assets/page.html')).checkLogs().findByCssSelector('body').getVisibleText().then(value => {
      assert.strictEqual(value, 'TEST HTML');
    }).checkLogs().printLogsOnError();
  }

});