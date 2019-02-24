const path = require('path')

export function getComponentName(...concatPaths) {
	return path.relative(
		process.cwd(),
		path.resolve(...concatPaths)
	)
		.replace(/\\/g, '/')
		.replace(/.[^/.]+$/, '')
}

export function getComponentPath(...concatPaths) {
	return `dist/components/${
		path.relative(
			path.resolve(process.cwd(), 'src'),
			path.resolve(...concatPaths)
		)
			.replace(/\\/g, '/')
	}.js`
}

export function getComponentUrl(...concatPaths) {
	return `/${getComponentPath(...concatPaths)}`
}
