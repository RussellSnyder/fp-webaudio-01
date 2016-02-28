var instrumentOne = {
	synth: 'sawtooth',
	// filter: 'highpass',
	// filterValue: 10000
}

var sadSine = {
	synth: 'sine',
	filter: 'lowpass',
	filterValue: 150,
	envelope: {
		a: 0.1,
		d: 0,
		s: 0,
		r: 0.2
	},
	volume: 0.5
}

var happySquare = {
	synth: 'square',
	filter: 'highpass',
	filterValue: 19000,
	envelope: {
		a: 0.1,
		d: 0,
		s: 0,
		r: 0.2
	},
	volume: 0.5
}

var kick = {
	synth: 'square',
	filter: 'lowpass',
	filterValue: 150,
	envelope: {
		a: 0.01,
		d: 0,
		s: 0,
		r: 0.2
	},
	volume: 1
}

