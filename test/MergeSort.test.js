
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect

describe('algorithmInJs test:', function () {

	it('mergeSort should be ok  ', (done) => {
		let {MergeSort} = require('../index')
		// let mergeSort = new MergeSort()
		var a = [1, 23, 45, 56, 2, 3, 34, 22]
		var n = a.length
		console.time('mergeSort')
		var mergeSort = new MergeSort(a, n)
		mergeSort.mergeSortInternally(a, 0)
		console.timeEnd('mergeSort')
		console.log('array:', a)
		done()
	})

})