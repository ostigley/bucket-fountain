import clear from 'clear'
import colors from 'colors'
import {filler, tipper, Bucket} from './bucket.js'

const bucket13 = Bucket(25)
const bucket12 = Bucket(14, [bucket13], [0.5])
const bucket11 = Bucket(10, [bucket13], [1])
const bucket10 = Bucket(9, [bucket13], [0.8])

const bucket9 = Bucket(11, [bucket11], [0.6])
const bucket8 = Bucket(10, [bucket13, bucket10], [0.3, 0.7])

const bucket7 = Bucket(13, [bucket10, bucket8, bucket9], [0.25, 0.25, 0.3])
const bucket6 = Bucket(7, [bucket11, bucket9], [0.5, 0.5])
const bucket5 = Bucket(8, [bucket8, bucket10, bucket13], [0.5, 0.25, 0.25])

const bucket4 = Bucket(9, [bucket7, bucket12], [0.6, 0.4])
const bucket3 = Bucket(11, [bucket6, bucket7], [0.3, 0.7]) 
const bucket2 = Bucket(10, [bucket6, bucket8], [0.6,0.4])
const bucket1 = Bucket(12, [bucket5, bucket10], [0.5,0.5])

setInterval(()=> {
	[bucket1, bucket2, bucket3, bucket4].map(bucket => {bucket.fill(0.2); bucket.tip()})
	clear()
	console.log('         ',bucket1.read(), '         ',bucket2.read(), '         ',bucket3.read(), '         ',bucket4.read())
	console.log('                    ', bucket5.read(), '           ', bucket6.read(), '           ', bucket7.read())
	console.log('                     ', bucket8.read(), '                ',bucket9.read())
	console.log('                 ', bucket10.read(), '             ', bucket11.read(), '                 ',bucket12.read())
	console.log('                              ',bucket13.read())
}, 200)

