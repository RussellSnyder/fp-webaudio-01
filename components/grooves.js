require(['groove_generators']);


var testGroove = {
	starts: [0,0.5,1,1.5,1.75],
	durations: [1,2,1,1,1.5],
	midi: [5,10,15,17,10],
	volume: [0.25,0.5,0.5,0.25]
}


// starts now means how much longer than duration to play;
// 0 is start wight after durations, 1
var testGroove2 = {
	starts: [0,0,1,1,3,0,1,0,1,0,0,1,0,1],
	durations: [1,2,1,1,1.5,1,2,1,1,1.5,1,2,1,1],
	midi: [5,10,15,17,10,5,10,15,17,10,10,15,17,10],
	volume: [0.25,0.5,0.5,0.25,0.25,0.5,0.5,0.25,0.25,0.5,0.5,0.25,0.25,0.5]
}

var testGroove3 = {
	starts: makeUniArray(14, 1),
	durations: makeRandArray(14,0,1),
	midi: makeRandArray(14,5,20,true),
	volume: makeRandArray(14,0.3,1)
}


var BjorkGroove = {
	starts: [0,0,1,1,3,0,1,0,1,0,0,1,0,1],
	durations: [1,2,1,1,1.5,1,2,1,1,1.5,1,2,1,1],
	midi: [5,10,15,17,10,5,10,15,17,10,10,15,17,10],
	volume: [0.25,0.5,0.5,0.25,0.25,0.5,0.5,0.25,0.25,0.5,0.5,0.25,0.25,0.5]	
}

var lowSlow = {
	starts: makeUniArray(32, 0),
	durations: makeUniArray(32, 1),
	midi: repeatArray(32,[-10,-7,-0]),
	volume: makeRandArray(32,0.2,0.3)
}
var happyBusy = {
	starts: makeUniArray(96, 0),
	durations: makeUniArray(96, 1),
	midi: repeatArray(96,[10,14,12,10,14,9]),
	volume: makeUniArray(96,0.2)
}

var darkAndDirty = {
	starts: makeUniArray(64, 0.8),
	durations: makeUniArray(64, 0.2),
	midi: repeatArray(64,[-38,]),
	volume: makeUniArray(64,1)
}

