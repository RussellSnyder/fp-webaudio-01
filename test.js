var audioContext = new AudioContext()



// play(0, 3, 0.25)
// play(1, 10, 0.25)
// play(2, 15, 0.25)

// when will the note occur

// midi to frequency
var MtoF = function(m) { return 440 * Math.pow(2,((m - 69)/12)) };
// frequency to Midi
var FtoM = function(f) { return parseInt((12/Math.log(2)) * Math.log(f/27.5) + 21) };




var instrumentOne = {
	synth: 'sawtooth',
	starts: [0,0.5,1,1.5,1.75],
	durations: [1,2,1,1,1.5],
	midi: [5,10,15,17,10],
	volume: [0.25,0.5,0.5,0.25]
}

var instrumentTwo = {
	synth: 'sine',
	seqLength: 3,
	starts: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
	durations: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	midi: [0,2,4,5,7,9,11,12,14,12,11,9,7,5],
}





// pass in an instrument object
// IO === Instrument Object
var sequenceMaker = function(IO, varLength) {

	return function() {
		var exactNotePlacements = IO.starts.map(function(x) { 
			return varLength ? (x / varLength) : x 
		});
		console.log(exactNotePlacements);

		var exactNoteDurations = IO.durations.map(function(x) { 
			return varLength ? (x / varLength) : x; 

		});
		console.log(exactNoteDurations);
		for (i=0;i < IO.midi.length; i++) {
			play(exactNotePlacements[i],IO.midi[i],exactNoteDurations[i],IO.synth);
		}
	}
}


var melodyOne = new sequenceMaker(instrumentOne,3);
var melodyTwo = new sequenceMaker(instrumentTwo,1);
var melodyThree = new sequenceMaker(instrumentTwo,1.1);
var melodyFour = new sequenceMaker(instrumentTwo,1.2);

// var melodyTwo = new sequenceMaker(1,arrPlacement,arrDuration,arrFreq,arrVolume);

// MtoF = 27.5 * 2((m - 21)/12);


// melodyOne();
melodyTwo();
melodyThree();
melodyFour();
// play(0, 300, 0.5,'square')
// play(1, 1000, 0.5,'square')
// play(2, 1500, 0.5,'square')



function play(delay, pitch, duration,synth) {
  var oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);
  
  var startTime = audioContext.currentTime + delay
  var endTime = startTime + duration
  
  oscillator.type = synth;
  oscillator.detune.value = pitch*100;
  
  oscillator.start(startTime);
  oscillator.stop(endTime);
  
}