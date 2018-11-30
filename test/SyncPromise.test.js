
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
describe('algorithmInJs test:', function () {

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

})