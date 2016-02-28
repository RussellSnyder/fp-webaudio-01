require(['../node_modules/ramda/dist/ramda','theory']);

var makeUniArray = function(num,content) {
	var array = [];
	for (i = 0 ; i < num ; i++) {
		array.push(content);
	}
	return array;
}

var makeRandArray = function(num,low,high,int) {
	var array = [];
	if (int === true) {
		for (i = 0 ; i < num ; i++) {
			array.push(Math.round((Math.random()*high)+low));
		}
	} else {
		for (i = 0 ; i < num ; i++) {
			array.push((Math.random()*high)+low);
		}		
	}
	return array;
}

var repeatArray = function(num, array) {
	var wholeLength = Math.floor(num / array.length);
	var remainingLength = num % array.length; 
	var finalArray = [];
	for (i = 0 ; i < wholeLength ; i++) {
		for (j = 0 ; j < array.length ; j++) {
			finalArray.push(array[j]);
		}
	}
	for (i = 0 ; i < remainingLength ; i++) {
		finalArray.push(array[i]);
	}
	return finalArray;
}

