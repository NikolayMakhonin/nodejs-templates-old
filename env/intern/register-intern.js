const path = require('path')
const Command = require('@theintern/leadfoot/Command').default
// const RemoteSuite = require('intern/lib/RemoteSuite').default
require('core-js/fn/array/flat-map')

/* eslint-disable */
function remoteLoadScript(scriptUrl, callback) {
	try {
		var script = window.document.createElement('script');
		script.onload = function () {
			console.error('LOADED !!!!');
			callback();
		};
		script.onerror = function (err) {
			console.error('LOADED2 !!!!');
			console.error(err);
			callback(err);
		};
		script.src = scriptUrl;
		document.head.appendChild(script);
	} catch (ex) {
		console.error('LOADED3 !!!!');
		callback(JSON.stringify({
			containerCssClass: containerCssClass,
			componentClass: componentClass,
			data: data,
			error: {
				message: ex.toString(),
				stack: ex.stack
			}
		}));
	}
}

function appendSvelteComponent(componentClass, containerCssClass, data, callback) {
	try {
		var container = document.createElement('div');
		container.className = containerCssClass;
		document.body.appendChild(container);

		console.error(componentClass);
		console.error(window[componentClass]);

		var component = new window[componentClass]({
			target: container,
			data
		});

		callback();
	} catch (ex) {
		callback(JSON.stringify({
			containerCssClass: containerCssClass,
			componentClass: componentClass,
			data: data,
			error: {
				message: ex.toString(),
				stack: ex.stack
			}
		}));
	}
}

/* eslint-enable */

global.pathToUrl = function pathToUrl(...concatPaths) {
	return `/${
		path.relative(
			process.cwd(),
			path.resolve(...concatPaths)
		)
			.replace(/\\/g, '/')
			.replace(/^\//, '')
	}`
}

function delay(timeMilliseconds) {
	return new Promise(resolve => setTimeout(resolve, timeMilliseconds))
}

Command.prototype.delay = function (timeMilliseconds) {
	return this
		.then(() => delay(timeMilliseconds))
}

Command.prototype.loadScript = function (scriptUrl) {
	return this.executeAsync(remoteLoadScript, [scriptUrl])
}

Command.prototype.getAllLogs = function () {
	return this
		.getAvailableLogTypes()
		.then(logTypes => Promise
			.all(logTypes
				.map(logType => this
					.getLogsFor(logType)
					.then(logs => logs
						.map(log => {
							log.type = logType
							return log
						})))))
		.then(logs => logs
			.flatMap(o => o))
}

function logToString(log) {
	return `[${log.type}] ${JSON.stringify(log, null, 4)}\r\n`
}

function logsToString(logs) {
	return logs.map(log => logToString(log)).join('\r\n')
}

Command.prototype.checkLogs = function (errorPredicate) {
	return this
		.getAllLogs()
		.then(logs => {
			if (errorPredicate && logs.any(errorPredicate)
				|| !errorPredicate && logs.length
			) {
				throw new Error(`Browser errors: ${logsToString(logs)}`)
			}

			if (logs.length) {
				console.log(logsToString(logs))
			}

			return logs
		})
}
