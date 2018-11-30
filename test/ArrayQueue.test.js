
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
describe('algorithmInJs test:', function () {


	it('ArrayQueue should be ok  ', (done) => {
		let {ArrayQueue} = require('../index')
		let arrayQueue = new ArrayQueue(8)
		//enqueue
		console.log('enqueue::', arrayQueue.enqueue('a'))
		console.log('arrayQueue:', arrayQueue)
		console.log('enqueue::', arrayQueue.enqueue('b'))
		console.log('arrayQueue:', arrayQueue)
		// dequeue
		console.log('dequeue:', arrayQueue.dequeue())
		console.log('dequeue show :', arrayQueue)
		done()
	})

})