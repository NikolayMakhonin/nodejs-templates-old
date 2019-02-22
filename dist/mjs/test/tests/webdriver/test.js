var _intern$getInterface = intern.getInterface('object'),
    registerSuite = _intern$getInterface.registerSuite;

var _intern$getPlugin = intern.getPlugin('chai'),
    assert = _intern$getPlugin.assert;

console.log('before registerSuite');

var keys = require('@theintern/leadfoot/keys');

registerSuite('Todo (functional)', {
  'submit form': function submitForm() {
    console.log('submit form');
    var result = this.remote.get('index.html') // .findByCssSelector('.new-todo')
    // .type('Task 1')
    // .type(keys.RETURN)
    // .type('Task 2')
    // .type(keys.RETURN)
    // .type('Task 3')
    // .getSpecAttribute('value')
    .then(function (value) {
      console.log(value);
    });
    return result;
  }
});
console.log('after registerSuite');