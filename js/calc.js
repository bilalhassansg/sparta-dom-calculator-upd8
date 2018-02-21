// console.log("jhdkqw");

// document.addEventListener("DOMContentLoad" , function(event) {
// 	var num7 = document.querySelectorAll(".buttonNum");

// 	for(var i = 0; i < num7.length; i++) {
// 		num7[i].addEventListener("click", function (event) {
// 		console.log(num7[i]);
// 		alert(event)
// 		});
// 	}
// });

var number1; // first number clicked 
var number2; // second number clicked 
var operatorclick; // operator used to make calculation
var total; // include a total of the sum, but make empty

document.addEventListener("DOMContentLoaded" , function(event) {
	var number = document.getElementsByClassName("buttonNum");

	for(var i = 0; i < number.length; i++) {
		number[i].addEventListener("click", function (event) {
		document.getElementById("screen").innerHTML = event.target.innerHTML;

		var number1 = event.target.innerHTML;

		var number2 = event.target.innerHTML;

		console.log(number1);
	});
}

var operation = document.getElementsByClassName("operator");

	for(var i = 0; i < operation.length; i++) {
		operation[i].addEventListener("click", function (event) {
		document.getElementById("screen").innerHTML = event.target.innerHTML;

		var operatorclick = event.target.innerHTML;
		console.log(operatorclick);
	});
}

var equal = document.getElementsByClassName("equals");
	for(var i = 0; i < equal.length; i++) {
		equal[i].addEventListener("click", function (event) {

			

		console.log(equal);
	});
}
});