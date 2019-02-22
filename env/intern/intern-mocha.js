import 'json5/lib/register'
import intern from 'intern'
global.intern = intern
import config from './config.json5'
intern.configure(config)
import './register-intern'

describe('webdriver', function () {
	it('intern', async function () {
		this.timeout(60000)
		console.log('Run Intern')

		// !!
		// If you have error in config, this method will hung
		// In this case run intern from terminal for fix the error
		await intern.run()

		console.log('Intern completed')
	})
})
