
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
describe('algorithmInJs test:', function () {


	it('bubbleSort should be ok  ', (done) => {
		let {Sort} = require('../index')
		let sort = new Sort()
		var array = [1,23,45,56,2,3,34,22]
		var len = array.length
		console.time('bubbleSort')
		sort.bubbleSort(array,len)
		console.timeEnd('bubbleSort')
		console.log('array:',  array)
		done()
	})

	it('insertionSort should be ok  ', (done) => {
		let {Sort} = require('../index')
		let sort = new Sort()
		var array = [1,23,45,56,2,3,34,22]
		var len = array.length
		console.time('insertionSort')
		sort.insertionSort(array,len)
		console.timeEnd('insertionSort')
		console.log('array:',  array)
		done()
	})

})