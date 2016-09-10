import {assert, expect} from 'chai'
import {Bucket} from '../bucket.js'

describe('A bucket', ()=> {
	let bucket = Bucket(10)

	it('has the correct behaviours', () => {
		expect(bucket).to.have.property('fill')
		expect(bucket).to.have.property('tip')
		expect(bucket).to.have.property('getState')
	})

})

describe('A bucket', () => {
	let bucket = Bucket(10)
	bucket.fill(5)
	bucket.tip()
	let state = bucket.getState()

	it('is not emptied unless it is full', () => {
		assert(state.level > 0)
	})

	let bucket2 = Bucket(10)
	bucket2.fill(11)
	bucket2.tip()
	let state2 = bucket2.getState()
	it('is emptied when full', () => {
		assert.equal(state2.level, 0)
	})
	
})

describe('Tipping a parent bucket', () => {
	//Arrange
	let bucket3 = Bucket(15)
	let bucket2 = Bucket(15)
	let bucket1 = Bucket(10, [bucket2, bucket3], [0.5, 0.5])

	//Act
	bucket1.fill(11)
	bucket1.tip()
	
	it('fills its children\'s buckets', () =>{
		let bucket1Level = bucket1.getState().level
		let bucket2Level = bucket2.getState().level
		let bucket3Level = bucket3.getState().level
		assert(bucket1Level === 0)
		assert(bucket2Level === 5)
		assert(bucket3Level === 5)
	})
})