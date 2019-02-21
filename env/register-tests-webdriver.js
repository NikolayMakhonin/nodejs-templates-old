const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
require('chai/register-assert')

require('json5/lib/register')
const intern = global.intern = require('intern').default
const util = require('intern/lib/common/util').default
const config = require('./intern.json5')
intern.configure(config)
// console.log(intern)
