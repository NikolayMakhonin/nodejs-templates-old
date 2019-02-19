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

const w3cValidatorUrl = 'https://validator.w3.org/nu/?out=json&group=1&parser=html5'

export async function validateW3C(options) {
	// formData to submit
	// const data = {
	// 	content        : options.content,
	// 	doctype        : options.doctype || 'Inline',
	// 	ss             : options.showSource ? 1 : null,
	// 	outline        : options.showOutline ? 1 : null,
	// 	prefill        : options.isFragment ? 1 : 0,
	// 	prefill_doctype: options.doctype || 'html401',
	// 	out            : 'json'
	// }

	// const formData = new FormData()
	// for (const key in data) {
	// 	if (Object.prototype.hasOwnProperty.call(data, key)) {
	// 		formData.append(key, data[key])
	// 	}
	// }

	const xhr = new XMLHttpRequest()
	xhr.timeout = options.timeout || 7000
	xhr.open('POST', w3cValidatorUrl)
	xhr.setRequestHeader('Content-Type', 'text/html; charset=utf-8')
	xhr.setRequestHeader('User-Agent', 'Validator.nu/LV http://validator.w3.org/services')

	const responseJson = await new Promise((resolve, reject) => {
		xhr.ontimeout = function () {
			reject(`validateW3C: The request for ${w3cValidatorUrl} timed out.`)
		}
		xhr.onerror = function () {
			reject('validateW3C: Error during the request')
		}
		xhr.onreadystatechange = function () {
			if (this.readyState !== 4) {
				return
			}

			if (this.status !== 200) {
				reject(`validateW3C: An error occurred during your request: ${this.status}:${this.statusText}`)
				return
			}

			resolve(this.responseText)
		}

		xhr.send(options.content)
	})

	const response = JSON.parse(responseJson)

	const result = {}
	for (const message of response.messages) {
		const type = message.subType || message.type
		let messages = result[type]
		if (!messages) {
			result[type] = messages = []
		}
		messages.push(message)
	}

	return result
}

handleWindowErrors()

export default {
	validateW3C,
	windowIsLoaded,
	waitWindowLoaded,
	handleWindowErrors,
	createWindow,
	windowTest
}
