let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect


describe('math.js test:', function () {


	it('Util.url2json  should be ok  ', (done) => {
		let {Util} = require('../index')
		let testUrl = 'https://translate.google.com/?view=home&op=translate&sl=en&tl=zh-CN&text=what%20i%20want%20to%20do%20is%20that'
		let getJSON = Util.url2json(testUrl)
		console.log("getJSON:",getJSON)
		expect(getJSON).to.be.a('object')
		done()
	})
	it('Util.json2url  should be ok  ', (done) => {
		let {Util} = require('../index')
		let testObj = {
			view: 'home',
			op: 'translate',
			sl: 'en',
			tl: 'zh-CN',
			text: 'what i want to do is that'
		}
		let getUrl = Util.json2url(testObj)
		console.log('getUrl::',getUrl)
		expect(getUrl).to.be.a('string')
		done()
	})
})