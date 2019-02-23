const path = require('path')
const Command = require('@theintern/leadfoot/Command').default

global.pathToUrl = function pathToUrl(...concatPaths) {
	return `/${path.relative(process.cwd(), path.resolve(...concatPaths)).replace(/\\/g, '/')}`
}

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

Command.prototype.loadScript = function (scriptUrl) {
	return this.executeAsync(remoteLoadScript, [scriptUrl])
}

Command.prototype.appendSvelteComponent = function (componentUrl, containerCssClass, data) {
	const componentName = componentUrl.replace(/\.[^/.]+$/, '').replace(/^\//, '')
	return this
		.loadScript(`/dist/components/${path.relative('/src', `${componentUrl}.js`)}`)
		.executeAsync(appendSvelteComponent, [componentName, containerCssClass, data])
}
