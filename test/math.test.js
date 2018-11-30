var math = require('mathjs')
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
math.config({
	number: 'BigNumber', // Default type of number:
                       // 'number' (default), 'BigNumber', or 'Fraction'
	precision: 64        // Number of significant digits for BigNumbers
})





describe('math.js test:', function () {


	it('math.js bignumber  should be ok  ', (done) => {
		let {Util} = require('../index')
		var result =Util.transBigNumber(math.add(math.bignumber(0.1), math.bignumber(0.2)))
		console.log(result)
		expect(result).to.be.a('number')
		console.log(typeof result)
		done()
	})

})