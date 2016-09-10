import {assert, expect} from 'chai'
import {filler, tipper, getState, Bucket} from '../bucket.js'

describe('The filler function', () => {
	let obj = filler()

	it('returns an object, with a fill() method', ()=>{
		expect(obj).to.be.a('object')
		expect(obj).to.have.property('fill')
		expect(obj.fill).to.be.a('function')
	})
})

describe('The tipper function', () =>{
	let obj = tipper()

	it('returns an object, with a tipp() method', ()=>{
		expect(obj).to.be.a('object')
		expect(obj).to.have.property('tip')
		expect(obj.tip).to.be.a('function')
	})
})

describe('the getState function', () => {
	let obj = getState()
	it('returns an object with a getState', () => {
		expect(obj).to.be.a('object')
		expect(obj).to.have.property('getState')
		expect(obj.getState).to.be.a('function')
	})
})

describe('The Bucket making function', () =>{
		const bucket = Bucket()
		it('returns an bucket object with fill and tip methods', ()=> {
			expect(bucket).to.be.a('object')
			expect(bucket).to.have.property('fill')
			expect(bucket).to.have.property('tip')
		})
})