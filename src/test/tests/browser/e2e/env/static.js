import e2eHelpers from '../src/helpers/e2e'

console.log(navigator.userAgent)

describe('browser > e2e > env > static', function () {
	const rootUrl = 'http://localhost:4444/env/assets'
	let win

	before(async function () {
		this.timeout(60000)
		win = e2eHelpers.createWindow(`${rootUrl}/index.html`)
		await e2eHelpers.waitWindowLoaded(win)
	})

	after(function () {
		win.close()
	})

	it('write', function () {
		this.timeout(60000)
		assert.strictEqual(win.document.body.innerText, 'TEST HTML')
		win.document.write('TEST WRITE')
		assert.strictEqual(win.document.body.innerText, 'TEST WRITE')
	})
})
