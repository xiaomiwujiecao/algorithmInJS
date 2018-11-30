
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
describe('algorithmInJs test:', function () {
	it('ArrayStack should be ok ', (done) => {
		let {ArrayStack} = require('../dist/lib/ArrayStack')
		let arrayStack = new ArrayStack(5)
		console.log(arrayStack.push(4))
		console.log(arrayStack.items)
		expect(arrayStack.items).to.be.a('array')
		done()
	})

})