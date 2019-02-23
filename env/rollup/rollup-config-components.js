// see: https://github.com/rollup/rollup/issues/703#issuecomment-306246339

const path = require('path')
const globby = require('globby')
const plugins = require('./plugins')

export default globby.sync([
	'src/main/**/*.svelte',
	'src/test/tests/webdriver/**/src/*.svelte'
])
	.map(file => ({
		input : file,
		output: {
			file     : path.resolve('dist/components', path.relative('src', `${file}.js`)),
			format   : 'cjs',
			sourcemap: true // 'inline'
		},
		plugins: [
			plugins.svelte(),
			plugins.babel(),
			// plugins.istanbul(),
			// plugins.globals(),
			// plugins.builtins(),
			plugins.nodeResolve(),
			plugins.commonjs(),
			plugins.babel(),
			// plugins.terser()
		]
	}))
