const {registerSuite} = intern.getInterface('object')
const {assert} = intern.getPlugin('chai')

const keys = require('@theintern/leadfoot/keys')
registerSuite('env > component', {
	'load'() {
		// docs: https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1
		return this.remote
			.get(pathToUrl(__dirname, 'assets/page.html'))
			.checkLogs()
			.findByCssSelector('body')
			.getVisibleText()
			.then(value => {
				assert.strictEqual(value, 'TEST HTML')
			})
			.setExecuteAsyncTimeout(10000)
			.appendSvelteComponent([__dirname, 'src/component.svelte'], '.component', {count: 1000})
			.then(err => {
				assert.notOk(err)
			})
			.checkLogs()
			.printLogsOnError()
	}
})
