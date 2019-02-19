function factory(injector, args) {
	const token = `launcher:${args.parent}`
	const locals = {
		args: ['value', args]
	}
	const plugin = injector.createChild([locals], [token]).get(token)
	for (const key in args) {
		if (key !== 'parent' && Object.prototype.hasOwnProperty.call(args, key)) {
			const value = args[key]
			if (value !== 'undefined') {
				plugin[key] = value
			}
		}
	}
	return plugin
}

module.exports = {
	'launcher:Custom': ['factory', factory]
}
