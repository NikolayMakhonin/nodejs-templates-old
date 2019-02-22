const path = require('path')

global.pathToUrl = function (...concatPaths) {
	return path.relative(process.cwd(), path.resolve(...concatPaths))
}
