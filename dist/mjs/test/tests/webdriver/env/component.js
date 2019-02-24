var _intern$getInterface = intern.getInterface('object'),
    registerSuite = _intern$getInterface.registerSuite;

var _intern$getPlugin = intern.getPlugin('chai'),
    assert = _intern$getPlugin.assert;

var keys = require('@theintern/leadfoot/keys');

registerSuite('env > component', {
  'load': function load() {
    var _this = this;

    // docs: https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1
    return this.remote.get(pathToUrl(__dirname, 'assets/page.html')) // .delay(60000)
    .findByCssSelector('body').getVisibleText().then(function (value) {
      assert.strictEqual(value, 'TEST HTML');
    }).setExecuteAsyncTimeout(10000).appendSvelteComponent([__dirname, 'src/component.svelte'], '.component', {
      count: 1000
    }).then(function (err) {
      assert.notOk(err);
    }).catch(function (err) {
      return _this.remote.getAvailableLogTypes().then(function (logTypes) {
        return Promise.all(logTypes.map(function (logType) {
          return _this.remote.getLogsFor(logType).then(function (log) {
            return "".concat(logType, " log:\r\n").concat(JSON.stringify(log, null, 4), "\r\n");
          });
        }));
      }).then(function (logs) {
        console.error(logs.join('\r\n'));
        throw err;
      });
    });
  }
});