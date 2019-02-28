import {configure, runTests} from './mocha-helpers'

configure({
	coverage: ['dist/components/**/*.js']
})
runTests()
