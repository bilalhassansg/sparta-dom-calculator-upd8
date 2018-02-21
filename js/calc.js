var number1; // first number clicked 
var number2; // second number clicked 
var operatorclick; // operator used to make calculation
var total; // include a total of the sum, but make empty

// GET THE FIRST NUMBER

document.addEventListener("DOMContentLoaded" , function(event) {
	var number1 = document.getElementsByClassName("buttonNum");

	for(var i = 0; i < number1.length; i++) {
		number1[i].addEventListener("click", function (event) {
		document.getElementById("screen").innerHTML = event.target.innerHTML;

		var number1val = event.target.innerHTML;

		//var number2 = new event.target.innerHTML;

		console.log("Number 1: " + number1val); // should show the first number in the console
	});
}

// GET THE SECOND NUMBER

var number2 = document.getElementsByClassName("buttonNum");

	for(var i = 0; i < number2.length; i++) {
		number2[i].addEventListener("click", function(event) {
		document.getElementById("screen").innerHTML = event.target.innerHTML;

		var number2val = event.target.innerHTML;

		//var number2 = new event.target.innerHTML;

		console.log("Number 2: " + number2val); // should show the first number in the console
	});
}

var operation = document.getElementsByClassName("operator");

	for(var i = 0; i < operation.length; i++) {
		operation[i].addEventListener("click", function (event) {
		document.getElementById("screen").innerHTML = event.target.innerHTML;

		var operatorclick = event.target.innerHTML;
		//console.log(operatorclick);

		number2 = event.target.innerHTML;
	});
}

var equal = document.getElementsByClassName("equals");
	for(var i = 0; i < equal.length; i++) {
		equal[i].addEventListener("click", function (event) {
		document.getElementById("screen").innerHTML = event.target.innerHTML;

		var equalbutton = event.target.innerHTML;

	});

		//console.log(total);
}

});