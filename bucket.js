const filler = (state) => ({
	fill: (amount) => {
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

const getState = state => ({
	getState: () => state
})

const reader = (state) => ({
	read: () => ' '.repeat(state.level).bgCyan + ' '.repeat(Math.floor(state.volume-state.level)).bgBlue
})


const Bucket = (volume = 10, children=[], distribution=[]  ) => {
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

export {filler, tipper, getState, Bucket}