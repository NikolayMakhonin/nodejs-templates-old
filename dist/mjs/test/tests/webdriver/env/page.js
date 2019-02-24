var _intern$getInterface = intern.getInterface('object'),
    registerSuite = _intern$getInterface.registerSuite;

var _intern$getPlugin = intern.getPlugin('chai'),
    assert = _intern$getPlugin.assert;

var keys = require('@theintern/leadfoot/keys');

registerSuite('env > page', {
  'load': function load() {
    // docs: https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1
    return this.remote // .get('/index.html2')
    .get(pathToUrl(__dirname, 'assets/page.html')) // .delay(60000)
    .findByCssSelector('body').getVisibleText().then(function (value) {
      assert.strictEqual(value, 'TEST HTML');
    });
  }
});