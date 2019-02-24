import path from 'path'

const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')
const istanbul = require('rollup-plugin-istanbul')
// const globals = require('rollup-plugin-node-globals')
// const builtins = require('rollup-plugin-node-builtins')
const nodeResolve  = require('rollup-plugin-node-resolve')
const commonjs  = require('rollup-plugin-commonjs')
const svelte  = require('rollup-plugin-svelte')
const nycrc  = require('../../.nycrc.json')
import preprocess from 'svelte-preprocess'
import themesPreprocess from 'svelte-themes-preprocess'
import postcssImport from 'postcss-import'

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

function svelteCommon(options = {}) {
	const sveltePreprocess = preprocess({
		scss   : true,
		pug    : true,
		postcss: Object.assign(postcssOptions, {

		})
	})

	return svelte({
		dev       : true,
		// see: https://github.com/Rich-Harris/svelte-preprocessor-demo
		preprocess: themesPreprocess(
			path.resolve('./src/main/styles/themes.scss'),
			sveltePreprocess,
			{
				lang: 'scss'
			}
		),
		...options,
	})
}

module.exports = {
	svelte: {
		common: svelteCommon,
		client: (options = {}) => svelteCommon({
			hydratable: true,
			emitCss   : true,
			...options
		}),
		server: (options = {}) => svelteCommon({
			generate: 'ssr',
			...options
		})
	},
	postCss: (options = {}) => postcssCommon({
		sourceMap: 'static/slyles.css.map',
		extract  : 'static/slyles.css',
		...options
	}),
	babel: (options = {}) => babel({
		...require('../../.babelrc'),
		runtimeHelpers: true,
		extensions    : ['.js', '.html', '.svelte'],
		exclude       : ['node_modules/@babel/**'],
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
		ecma     : 5,
		sourcemap: {
			content: 'inline',
			url    : 'inline'
		},
		...options
	})
}
