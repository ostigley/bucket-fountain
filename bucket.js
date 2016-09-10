import clear from 'clear'
import colors from 'colors'

const filler = (state) => ({
	fill: (amount = 1) => {
		state.level+= amount
	}
})

const tipper = (state) => ({
	tip: () => {
		if (state.level > state.volume) {
			state.level = 0
			state.children.map((child, i) => {
				child.fill(state.distribution[i]*state.volume)
				child.tip()
			})
		}
	}
})


const reader = (state) => ({
	read: () => state.level
})

const TopBucket = (volume, children, distribution) => {
	let state = {
		volume,
		children,
		distribution,
		level: 0
	}

	return Object.assign(
		{},
		filler(state),
		tipper(state),
		reader(state),
	)
}

const Bucket = (volume, children=[], distribution=[]  ) => {
	let state = {
		volume,
		children,
		distribution,
		level: 0,
	}

	return Object.assign(
		{},
		filler(state),
		tipper(state),
		reader(state)
	)
}

const bucket2 = Bucket(15)
const bucket1 = Bucket(10, [bucket2], [0.5, 0.5])

setInterval(()=> {
	bucket1.fill()
	bucket1.tip()
	clear()
	console.log(`                    Bucket 1 level: ${bucket1.read()}`.blue)
	console.log(`Bucket 2 level: ${bucket2.read()}`.yellow)

}, 100)


