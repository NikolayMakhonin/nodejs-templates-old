const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')
const istanbul = require('rollup-plugin-istanbul')
// const globals = require('rollup-plugin-node-globals')
// const builtins = require('rollup-plugin-node-builtins')
const nodeResolve  = require('rollup-plugin-node-resolve')
const commonjs  = require('rollup-plugin-commonjs')
const svelte  = require('rollup-plugin-svelte')
const nycrc  = require('../../.nycrc.json')

function svelteCommon(config) {
	return svelte({
		dev       : true,
		hydratable: true,
		emitCss   : true,
		...config,
	})
}

module.exports = {
	svelte: {
		common: config => svelteCommon(config),
		client: config => svelteCommon({
			hydratable: true,
			emitCss   : true,
			...config
		}),
		server: config => svelteCommon({
			generate: 'ssr',
			...config
		})
	},
	babel: (options = {}) => babel({
		runtimeHelpers: true,
		extensions    : ['.js', '.html', '.svelte'],
		exclude       : ['node_modules/@babel/**']
		...options
	}),
	istanbul: (options = {}) => istanbul({
		...nycrc,
		...options
	}),
	// globals    : (options = {}) =>globals(options),
	// builtins   : (options = {}) =>builtins(options),
	nodeResolve: (options = {}) => nodeResolve(options),
	commonjs   : (options = {}) => commonjs({
		// namedExports: {
		// 	'node_modules/chai/index.js': ['assert', 'expect']
		// }
		...options
	}),
	terser: (options = {}) => terser({
		mangle   : false,
		module   : true,
		sourcemap: {
			content: 'inline',
			url    : 'inline'
		},
		...options
	})
}
