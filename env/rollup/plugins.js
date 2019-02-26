const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')
const istanbul = require('rollup-plugin-istanbul')
// const globals = require('rollup-plugin-node-globals')
// const builtins = require('rollup-plugin-node-builtins')
const nodeResolve  = require('rollup-plugin-node-resolve')
const commonjs  = require('rollup-plugin-commonjs')
const nycrc  = require('../../.nycrc.json')
const prettier = require('rollup-plugin-prettier')
const postcssImport = require('postcss-import')

function postcssCommon(options = {}) {
	return {
		// see: https://github.com/postcss/postcss
		plugins: [
			// This plugin is necessary and should be first in plugins list:
			postcssImport(),

			// cssnano({
			// 	preset: [
			// 		'default', {
			// 			discardComments: {
			// 				removeAll: true,
			// 			},
			// 		}
			// 	],
			// })
		],
		...options
	}
}


module.exports = {
	postCss: (options = {}) => postcssCommon({
		// sourceMap: 'static/styles.css.map',
		// extract  : 'static/styles.css',
		...options
	}),
	babel: (options = {}) => babel({
		...require('../../.babelrc'),
		runtimeHelpers: true,
		...options
	}),
	istanbul: (options = {}) => istanbul({
		...nycrc,
		...options
	}),
	// globals    : (options = {}) => globals(options),
	// builtins   : (options = {}) => builtins(options),
	nodeResolve: (options = {}) => nodeResolve(options),
	commonjs   : (options = {}) => commonjs({
		// namedExports: {
		// 	'node_modules/chai/index.js': ['assert', 'expect']
		// }
		...options
	}),
	terser: (options = {}) => terser({
		mangle: false,
		module: true,
		ecma  : 5,
		output: {
			max_line_len: 50,
		},
		sourcemap: {
			content: 'inline',
			url    : 'inline'
		},
		...options
	}),
	prettier: (options = {}) => null && prettier({ // very slow
		parser     : 'babylon',
		tabWidth   : 4,
		singleQuote: true,
		sourceMap  : true,
		...options
	})
}
