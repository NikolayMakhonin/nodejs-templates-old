const {registerSuite} = intern.getInterface('object')
const {assert} = intern.getPlugin('chai')

registerSuite('main > sapper > routes > navigation', {
	'base'() {
		// docs: https://theintern.io/docs.html#Leadfoot/2/api/Command/command-1
		return this.remote
			.get('/dist/sapper/export/index.html')
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
