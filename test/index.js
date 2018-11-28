var assert = require('chai').assert
var should = require('chai').should()
var expect = require('chai').expect
var {LinkedList} = require('../dist/lib/LinkedList')
console.log(LinkedList)
describe('LinkedList test',function () {
	this.timeout(3000);
	it('it should output the key ',function (done) {
		var a = [4,2,3,5,9,6]
		var n = 6
		var key = 6
		var linkedList = new LinkedList('小米')
		var result = linkedList.findKeyInArrayRapidlly(a,n,key)
		console.log(result)
		expect(result).to.be.a('number')
		done()
	})
})