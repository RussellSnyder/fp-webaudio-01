var protoMaj = [0,4,7],
	protoMin = [0,3,7],
	protoDim = [0,3,6],
	protoMaj7 = [0,4,7,11],
	protoMin7 = [0,3,7,10],
	protoDom7 = [0,4,7,10],
	protoDim7 = [0,3,6,9],
	protoHalfDim7 = [0,3,6,10];


var makeMidiNotesArray = function() {
	var midiNoteStart = 0;
	var midiNoteEnd = 255;

	var allMidiNotesArray = [];

	while(midiNoteStart < midiNoteEnd+1){
	  allMidiNotesArray.push(midiNoteStart++);
	}
	return allMidiNotesArray
}

var noteLetters = ['C', 'Cs', 'Db', 'D', 'Ds', 'Eb', 'E', 'F', 'Fs', 'Gb', 'G', 'Gs', 'Ab', 'A', 'As','Bb', 'B'];

var midiNotesOneOctaveChromatic = [];
for (i = 0 ; i <= 11 ; i++) {
	midiNotesOneOctaveChromatic.push(i);
}
var octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

allNotesAllOctaves = [];

for (i = 0 ; i < octaves.length ; i ++ ){
	for (j = 0 ; j < noteLetters.length ; j ++ ){
		allNotesAllOctaves.push(noteLetters[j] + octaves[i]);		
	}
}

function note(name, midiValue, octave) {
	this.name = name;
	this.midiValue = midiValue;
	this.octave = octave;
}


for (i = 0 ; i < allNotesAllOctaves.length ; i++) {
	allNotesAllOctaves[i] = new note(
			allNotesAllOctaves[i], 
			allNotesAllOctaves.indexOf(allNotesAllOctaves[i]), 
			allNotesAllOctaves[i].slice((allNotesAllOctaves[i].length - 1), allNotesAllOctaves[i].length)
			);
}

var chords = [];

function chord(maj, min, dim, maj7, min7, dom7, dim7, halfDim7) {
	this.maj = maj;
	this.min = min;
	this.dim = dim;
	this.maj7 = maj7;
	this.min7 = min7;
	this.dom7 = dom7;
	this.dim7 = dim7;
	this.halfDim7 = halfDim7;
}


for (i = 0 ; i < allNotesAllOctaves.length ; i++) {
	chords[i] = new chord(
			protoMaj.map(function(x) { return x + allNotesAllOctaves.indexOf(allNotesAllOctaves[i])}), 
			protoMin.map(function(x) { return x + allNotesAllOctaves.indexOf(allNotesAllOctaves[i])}), 
			protoDim.map(function(x) { return x + allNotesAllOctaves.indexOf(allNotesAllOctaves[i])}), 
			protoMaj7.map(function(x) { return x + allNotesAllOctaves.indexOf(allNotesAllOctaves[i])}), 
			protoMin7.map(function(x) { return x + allNotesAllOctaves.indexOf(allNotesAllOctaves[i])}), 
			protoDom7.map(function(x) { return x + allNotesAllOctaves.indexOf(allNotesAllOctaves[i])}), 
			protoDim7.map(function(x) { return x + allNotesAllOctaves.indexOf(allNotesAllOctaves[i])}), 
			protoHalfDim7.map(function(x) { return x + allNotesAllOctaves.indexOf(allNotesAllOctaves[i])})
			);
}

var majChord = function(note) {
	var currentChord = chords[note].maj;
	for ( i = 0 ; i <= currentChord.length ; i++) {
		var singleNote = parseInt(currentChord[i]);
	}
	return currentChord
}

var minChord = function(startTime, note, volume) {
	var currentChord = chords[note].min;
	for ( i = 0 ; i <= currentChord.length ; i++) {
		var singleNote = currentChord[i];
		play(startTime, singleNote, volume);
	}
}

var dimChord = function(startTime, note, volume) {
	var currentChord = chords[note].dim;
	for ( i = 0 ; i <= currentChord.length ; i++) {
		var singleNote = currentChord[i];
		play(startTime, singleNote, volume);
	}
}

var maj7Chord = function(startTime, note, volume) {
	var currentChord = chords[note].maj7;
	for ( i = 0 ; i <= currentChord.length ; i++) {
		var singleNote = currentChord[i];
		play(startTime, singleNote, volume);
	}
}

var min7Chord = function(startTime, note, volume) {
	var currentChord = chords[note].min7;
	for ( i = 0 ; i <= currentChord.length ; i++) {
		var singleNote = currentChord[i];
		play(startTime, singleNote, volume);
	}
}

var dom7Chord = function(startTime, note, volume) {
	var currentChord = chords[note].dom7;
	for ( i = 0 ; i <= currentChord.length ; i++) {
		var singleNote = currentChord[i];
		play(startTime, singleNote, volume);
	}
}

var dim7Chord = function(startTime, note, volume) {
	var currentChord = chords[note].dim7;
	for ( i = 0 ; i <= currentChord.length ; i++) {
		var singleNote = currentChord[i];
		play(startTime, singleNote, volume);
	}
}

var halfDim7Chord = function(startTime, note, volume) {
	var currentChord = chords[note].halfDim7;
	for ( i = 0 ; i <= currentChord.length ; i++) {
		var singleNote = currentChord[i];
		play(startTime, singleNote, volume);
	}
}
