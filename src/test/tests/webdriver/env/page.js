const {registerSuite} = intern.getInterface('object')
const {assert} = intern.getPlugin('chai')

const keys = require('@theintern/leadfoot/keys')
registerSuite('env > page', {
	'load'() {
		// docs: https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1

		return this.remote
			.get(pathToUrl(__dirname, 'assets/page.html'))
			.testPage(() => this.remote
				.getUserAgent().logThis('UserAgent: ')
				.getHtml().logThis('UserAgent: ')
				.checkLogs()
				.findByCssSelector('body')
				.getVisibleText()
				.then(value => {
					assert.strictEqual(value, 'TEST HTML')
				}))
	}
})
