var _intern$getInterface = intern.getInterface('object'),
    registerSuite = _intern$getInterface.registerSuite;

var _intern$getPlugin = intern.getPlugin('chai'),
    assert = _intern$getPlugin.assert;

registerSuite('env > component', {
  'load': function load() {
    var _this = this;

    // docs: https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1
    return this.remote.get(pathToUrl(__dirname, 'assets/page.html')).testPage(function () {
      return _this.remote.findByCssSelector('body').getVisibleText().then(function (value) {
        assert.strictEqual(value, 'TEST HTML');
      }).appendSvelteComponent([__dirname, 'src/component.svelte'], '.component', {
        count: 1000
      });
    });
  }
});