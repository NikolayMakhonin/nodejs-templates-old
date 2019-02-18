import e2eHelpers from '../src/helpers/e2e'

console.log(navigator.userAgent)

describe('browser > e2e > env > static', function () {
	const rootUrl = 'http://localhost:9876'
	let win

	before(async function () {
		this.timeout(60000)
		win = e2eHelpers.createWindow(`https://fragmenter.net/`)
		await e2eHelpers.waitWindowLoaded(win)
	})

	after(function () {
		win.close()
	})

	it('write', function () {
		this.timeout(60000)
		console.log(win.document.body.innerText)
		// assert.strictEqual(win.document.body.innerText, 'TEST HTML')
		// win.document.write('TEST WRITE')
		win.document.body.innerText = 'TEST WRITE'
		assert.strictEqual(win.document.body.innerText, 'TEST WRITE')
	})
})
