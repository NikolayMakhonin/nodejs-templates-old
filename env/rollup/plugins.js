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
	babel: () => babel({
		runtimeHelpers: true,
		extensions    : ['.js', '.html', '.svelte'],
		exclude       : ['node_modules/@babel/**']
	}),
	istanbul   : () => istanbul(nycrc),
	// globals    : () => globals(),
	// builtins   : () => builtins(),
	nodeResolve: () => nodeResolve(),
	commonjs   : () => commonjs({
		// namedExports: {
		// 	'node_modules/chai/index.js': ['assert', 'expect']
		// }
	}),
	terser: () => terser({
		mangle   : false,
		module   : true,
		sourcemap: {
			content: 'inline',
			url    : 'inline'
		}
	})
}
