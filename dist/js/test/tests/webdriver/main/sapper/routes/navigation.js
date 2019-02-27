"use strict";

const {
  registerSuite
} = intern.getInterface('object');
const {
  assert
} = intern.getPlugin('chai');
registerSuite('main > sapper > routes > navigation', {
  'base'() {
    // docs:
    // https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1
    // https://theintern.io/leadfoot/module-leadfoot_Command.html
    return this.remote // .delay(60000)
    .getWithPort(4445, '/sapper/page/index.html').testPage(() => this.remote.findByCssSelector('[href=about]').click().getCurrentUrl().then(o => assert.strictEqual(new URL(o).pathname, '/sapper/page/about')).end().findByCssSelector('[href=blog]').click().getCurrentUrl().then(o => assert.strictEqual(new URL(o).pathname, '/sapper/page/blog')).end().findByCssSelector('[href="blog/what-is-sapper"]').click().getCurrentUrl().then(o => assert.strictEqual(new URL(o).pathname, '/sapper/page/blog/what-is-sapper')).end().findByCssSelector('[href="."]').click().getCurrentUrl().then(o => assert.strictEqual(new URL(o).pathname, '/sapper/page/')).end());
  }

});