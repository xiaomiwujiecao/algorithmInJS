
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
describe('algorithmInJs test:', function () {


	it('CircleQueue should be ok  ', (done) => {
		let {CircleQueue} = require('../index')
		let circleQueue = new CircleQueue(8)
		console.log('circleQueue:',  circleQueue.enqueue('jame'))
		console.log('circleQueue:',  circleQueue.enqueue('tom'))
		console.log('circleQueue:',  circleQueue.enqueue('jerry'))
		console.log('circleQueue:',  circleQueue)
		done()
	})

})