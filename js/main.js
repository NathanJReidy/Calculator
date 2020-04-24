// Create variables for elements that need to be clicked/changed
let clear = document.querySelector("#textClear");
let zero = document.querySelector("#textZero");
let point = document.querySelector("#textPoint");
let equals = document.querySelector("#textEquals");
let plus = document.querySelector("#textPlus");
let one = document.querySelector("#textOne");
let two = document.querySelector("#textTwo");
let three = document.querySelector("#textThree");
let subtract = document.querySelector("#textSubtract");
let four = document.querySelector("#textFour");
let five = document.querySelector("#textFive");
let six = document.querySelector("#textSix");
let multiply = document.querySelector("#textMultiply");
let seven = document.querySelector("#textSeven");
let eight = document.querySelector("#textEight");
let nine = document.querySelector("#textNine");
let divide = document.querySelector("#textDivide");



function add(a, b) {
	return a + b;
  }
  
function subtract(a, b) {
	return a - b;
  }
  
function sum(array) {
	return array.reduce((total, current) => total + current, 0);
  }
  
function multiply(array) {
	return array.length
	    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
		: 0;
  }
  
