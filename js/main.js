// Create variables for elements that need to be clicked/changed
let vClear = document.querySelector('#clearButton');
let vZero = document.querySelector("#zero");
let vPoint = document.querySelector("#point");
let vEquals = document.querySelector("#equals");
let vPlus = document.querySelector("#plus");
let vOne = document.querySelector("#one");
let vTwo = document.querySelector("#two");
let vThree = document.querySelector("#three");
let vSubtract = document.querySelector("#subtract");
let vFour = document.querySelector("#four");
let vFive = document.querySelector("#five");
let vSix = document.querySelector("#six");
let vMultiply = document.querySelector("#multiply");
let vSeven = document.querySelector("#seven");
let vEight = document.querySelector("#eight");
let vNine = document.querySelector("#nine");

let vScreen = document.querySelector("#textScreenNum");

vClear.addEventListener('click', () => vScreen.textContent = "0");



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
  
