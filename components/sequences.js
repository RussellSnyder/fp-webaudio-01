require(['functions','instruments']);


var audioContext = new AudioContext()



// play(0, 3, 0.25)
// play(1, 10, 0.25)
// play(2, 15, 0.25)

// when will the note occur

// midi to frequency
var MtoF = function(m) { return 440 * Math.pow(2,((m - 69)/12)) };
// frequency to Midi
var FtoM = function(f) { return parseInt((12/Math.log(2)) * Math.log(f/27.5) + 21) };





// pass in an instrument object
// IO === Instrument Object
var sequenceMaker = function(instrumentDefs, varLength,groove) {
	var delayArray = groove.starts;
	var durationArray = groove.durations;
	var noteArray = groove.midi;
	var volumeArray = groove.volume;

	// var synth = instrumentDefs.synth;
	// var filter = instrumentDefs.filter;
	return function() {
		// lets make it functional
		var getExactNotePlacements = function(x) { 
			return varLength ? (x / varLength) : x 
		};
		var getExactNoteDurations = function(x) { 
			return varLength ? (x / varLength) : x; 
		};

		var exactNotePlacements = map(getExactNotePlacements, delayArray);
		var exactNoteDurations = map(getExactNoteDurations, durationArray); 

		//make the play objects
		var spaceCounter = 0;

		for (i=0;i < noteArray.length; i++) {
			// space counter is the space between the notes end and the next notes beginning
			// so its duration + notestart
			if (spaceCounter === 0) {
				play(exactNotePlacements[i],noteArray[i],exactNoteDurations[i],
					volumeArray[i], instrumentDefs);
			} else {
				play(spaceCounter,noteArray[i],exactNoteDurations[i],
					volumeArray[i], instrumentDefs);				
			}
			spaceCounter = spaceCounter += (exactNotePlacements[i]+exactNoteDurations[i]);
		}
	}
}


var melodyOne = new sequenceMaker(sadSine,1,lowSlow);
var melodyTwo = new sequenceMaker(happySquare,3,happyBusy);
var kick = new sequenceMaker(kick,1,darkAndDirty);
// var melodyFour = new sequenceMaker(instrumentTwo,1.2);


// melodyThree();
// melodyFour();
// play(0, 300, 0.5,'square')
// play(1, 1000, 0.5,'square')
// play(2, 1500, 0.5,'square')



function play(delay, pitch, duration,volume,instrument) {
	var startTime = audioContext.currentTime + delay;
	var endTime = startTime + duration;
	var oscillator = audioContext.createOscillator();

	oscillator.type = instrument.synth;
	oscillator.detune.value = pitch*100;  
	oscillator.start(startTime);
	oscillator.stop(endTime);

	if (instrument.volume) {
		var gainNode = audioContext.createGain();

		var final = gainNode;
		// // Connect the source to the gain node.
		// source.connect(gainNode);
		// Connect the gain node to the destination.
		gainNode.connect(audioContext.destination);

		gainNode.gain.value = volume;

	} else {
		var final = audioContext.destination;
	}




	if (!instrument.filter && !instrument.envelope) {  
	 	oscillator.connect(final);
	}else if ( instrument.filter && !instrument.envelope ) {  
	  	var filter = audioContext.createBiquadFilter();
	  	filter.connect(final);
		// Filter out all frequencies below 10000Hz
		filter.type = instrument.filter;
		filter.frequency.value = instrument.filterValue;  
	 	oscillator.connect(filter);

	}else if ( !instrument.filter && instrument.envelope ) {  
		var amp = audioContext.createGain();
		oscillator.connect(amp);
		amp.connect(final);

		amp.gain.value = 0
		amp.gain.setTargetAtTime(1, startTime, instrument.envelope.a);
		amp.gain.setTargetAtTime(0, endTime, instrument.envelope.r);

	}  else if ( instrument.envelope && instrument.filter ) {  
	  	var filter = audioContext.createBiquadFilter();
		var amp = audioContext.createGain();

	 	oscillator.connect(amp);
		amp.connect(filter);
	  	filter.connect(final);

		amp.gain.value = 0
		amp.gain.setTargetAtTime(1, startTime, instrument.envelope.a);
		amp.gain.setTargetAtTime(0, endTime, instrument.envelope.r);

		filter.type = instrument.filter;
		filter.frequency.value = instrument.filterValue;  

	}
  
}