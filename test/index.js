
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
describe('algorithmInJs test:', function () {
	it('require this package should be done ', (done) => {
		let all = require('../index')

		console.log('all:',  all)

		done()
	})
})