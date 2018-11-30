// import {BinarySearch} from "../src/lib/BinarySearch";

let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
describe('algorithmInJs test:', function () {
	it('BinarySearch should be ok  ', (done) => {
		let {BinarySearch} = require('../index')
		let a = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].reverse()
		let n = a.length
		let val = 8
		let bs = new BinarySearch()
		console.log('bs', bs)
		let result = bs.bsearchInternally(a, 0, n - 1, val)
		console.log('result:', result)
		expect(result).to.be.a('number')
		done()
	})

})