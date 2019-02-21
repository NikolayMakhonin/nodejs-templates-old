/* eslint-env node, mocha */
// console.log(Node)
// import util from 'intern/lib/common/util'
// console.log(Node)
// console.log(util)
// const intern = global.intern = new Node()
// intern.configure(util.loadConfig('.src/intern'))
import 'systemjs/dist/system'

describe('webdriver', function () {
	it('intern', async function () {
		this.timeout(60000)
		// const intern = global.intern = await System._nodeRequire('intern')
		// await new Promise((resolve, reject) => {
		// 	intern.on('afterRun', function () {
		// 		resolve()
		// 	})
		// 	intern.run()
		// })
		await intern.run()

		console.log('After intern run')
	})
})
