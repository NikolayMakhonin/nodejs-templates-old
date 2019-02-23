const path = require('path')
const Command = require('@theintern/leadfoot/Command').default

global.pathToUrl = function (...concatPaths) {
	return path.relative(process.cwd(), path.resolve(...concatPaths))
}

/* eslint-disable */
function remoteLoadScript(scriptUrl, callback) {
	try {
		throw new Error(callback + '')
		var script = window.document.createElement('script')
		script.onload = function () {
			callback()
		}
		script.onerror = function () {
			callback(err)
		}
		script.src = scriptUrl;
		document.head.appendChild(script);
	} catch (ex) {
		callback(ex)
	}
}

function appendSvelteComponent(containerCssClass, componentClass, data, callback) {
	try {
		var container = document.createElement('div');
		container.className = containerCssClass;
		document.body.appendChild(container)

		if (data) {
			JSON.parse(data)
		}

		var component = new window[componentClass]({
			target: container,
			data
		})

		callback()
	} catch (ex) {
		callback(ex)
	}
}

/* eslint-enable */

Command.prototype.loadScript = function (scriptUrl) {
	return this.executeAsync(remoteLoadScript, [scriptUrl])
}

Command.prototype.appendSvelteComponent = function (containerCssClass, componentClass, data) {
	return this.executeAsync(remoteLoadScript, [containerCssClass, componentClass, data])
}
