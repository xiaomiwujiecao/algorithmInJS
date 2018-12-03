
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
describe('algorithmInJs test:', function () {


	it('Nodes should be ok  ', (done) => {
		let {Nodes} = require('../index')
		var node1 = new Nodes(5)
		node1.insert(2)
		node1.insert(4)
		console.log(node1)

		// delete
		console.time('delete')
		node1.delete(3)
		console.timeEnd('delete')
		console.log('deleted::',node1)
		done()
	})

})