export function windowIsLoaded(win) {
	return win.document.readyState === 'complete' || win.document.readyState === 'interactive'
}

export async function waitWindowLoaded(win) {
	await new Promise(resolve => {
		win.onload = resolve
		win.addEventListener('load', resolve, true)
		if (windowIsLoaded(win)) {
			// eslint-disable-next-line callback-return
			resolve()
		}
	})

	console.log(`Window loaded: ${win.document.location.href}`)

	console.log(`Current window: ${document.location.href}`)

	await new Promise(resolve => setTimeout(resolve, 5000))

	console.log(`Window loaded2: ${win.document.location.href}`)
}

export function createWindow(url, width, height) {
	const winName = (Number.MAX_SAFE_INTEGER * Math.random()).toString(32)
	console.log(`Window opening: ${url}`)
	const win = window.open(
		url,
		winName,
		`width=${width || 600},height=${height || 1000},location=no,resizable=yes,scrollbars=yes`
	)
	console.log(`Window opened: ${win.document.location.href}`)
	handleWindowErrors(win)
	return win
}

export async function windowTest(url, width, height, testFunc) {
	const win = createWindow(url, width, height)
	try {
		await testFunc()
	} finally {
		win.close()
	}
}

function handleWindowErrors(win = window) {
	win.onerror = function (message, file, line, col, error) {
		const msg = JSON.stringify({
			message,
			file,
			line,
			col,
			error
		})
		console.error(msg)
		assert.fail(msg)
		return false
	}

	win.addEventListener('error', function (e) {
		const msg = JSON.stringify(e)
		console.error(msg)
		assert.fail(msg)
		return false
	})

	win.addEventListener('unhandledrejection', function (e) {
		const msg = JSON.stringify(e)
		console.error(msg)
		assert.fail(msg)
	})
}

handleWindowErrors()

export default {
	windowIsLoaded,
	waitWindowLoaded,
	handleWindowErrors,
	createWindow,
	windowTest
}
