
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect

describe('algorithmInJs test:', function () {

	it('mergeSort should be ok  ', (done) => {
		let {CountingSort} = require('../index')
		// let mergeSort = new MergeSort()
		var a = [11,10,9,8,7,6,5,4,3,2,1]
		var n = a.length
		console.time('countingSort')
		CountingSort.countingSort(a,n)
		// quickSort.mergeSortInternally(a, 0)
		console.timeEnd('countingSort')
		console.log('array:', a)
		done()
	})

})