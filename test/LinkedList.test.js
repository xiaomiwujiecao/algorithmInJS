
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
describe('algorithmInJs test:', function () {
	this.timeout(3000);
	// test linkedList
	it('LinkedList should output the key ', (done) => {
		let {LinkedList} = require('../dist/lib/LinkedList')

		let a = [4, 2, 3, 5, 9, 6]
		let n = 6
		let key = 6
		let linkedList = new LinkedList('reserse')
		console.log(LinkedList)
		let result = linkedList.findKeyInArrayRapidlly(a, n, key)
		console.log(result)
		expect(result).to.be.a('number')
		done()
	})

})