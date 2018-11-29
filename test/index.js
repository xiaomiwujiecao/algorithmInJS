
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
	// test arrayStack
	it('ArrayStack should be ok ', (done) => {
		let {ArrayStack} = require('../dist/lib/ArrayStack')
		let arrayStack = new ArrayStack(5)
		console.log(arrayStack.push(4))
		console.log(arrayStack.items)
		expect(arrayStack.items).to.be.a('array')
		done()
	})

	it('SyncPromise should be ok ', (done) => {
		let {SyncPromise} = require('../dist/lib/SyncPromise')
		let syncPromise = new SyncPromise()
		console.log(syncPromise)
		let self = this
		const a = (option) => {
			return new Promise((resolve, reject) => {
					console.log(option)
					resolve(option)
				}
			)
		}

		let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]

		function method(option) {
			return (callback) => {
				a(option).then(data => {
					callback(null, data)
				})
			}
		}

		let arrayOfCallback = ids.map(id => {
			return method(id)
		})
		syncPromise.seriesOfArray(arrayOfCallback)
		expect(arrayOfCallback).to.be.a('array')
		done()
	})
	it('require this package should be done ', (done) => {
		let all = require('../index')

		console.log('all:',  all)

		done()
	})
	it('ArrayQueue should be ok  ', (done) => {
		let {ArrayQueue} = require('../index')
		let arrayQueue = new ArrayQueue(8)
		//enqueue
		console.log('enqueue::',arrayQueue.enqueue('a'))
		console.log('arrayQueue:',  arrayQueue)
		console.log('enqueue::',arrayQueue.enqueue('b'))
		console.log('arrayQueue:',  arrayQueue)
		// dequeue
		console.log('dequeue:',  arrayQueue.dequeue())
		console.log('dequeue show :',  arrayQueue)
		done()
	})

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