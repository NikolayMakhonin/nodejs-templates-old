var _intern$getInterface = intern.getInterface('object'),
    registerSuite = _intern$getInterface.registerSuite;

var _intern$getPlugin = intern.getPlugin('chai'),
    assert = _intern$getPlugin.assert;

var keys = require('@theintern/leadfoot/keys');

registerSuite('env > page', {
  'load': function load() {
    var _this = this;

    // docs: https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1
    return this.remote.get(pathToUrl(__dirname, 'assets/page.html')).testPage(function () {
      return _this.remote.getUserAgent().logThis('UserAgent: ').getHtml().logThis('UserAgent: ').checkLogs().findByCssSelector('body').getVisibleText().then(function (value) {
      assert.strictEqual(value, 'TEST HTML');
      });
    });
  }
});