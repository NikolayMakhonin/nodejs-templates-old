const {registerSuite} = intern.getInterface('object')
const {assert} = intern.getPlugin('chai')

const keys = require('@theintern/leadfoot/keys')
registerSuite('Todo (functional)', {
	'submit form'() {
		console.log('submit form')

		// docs: https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1

		return this.remote
			.setExecuteAsyncTimeout(10000)
			.get(pathToUrl(__dirname, 'assets/page.html'))
			.logUserAgent()
			.logHtml()
			.checkLogs()
			.findByCssSelector('body')
			.getVisibleText()
			.then(value => {
				assert.strictEqual(value, 'TEST HTML')
			})
			.checkLogs()
			.printLogsOnError()
	}
})
