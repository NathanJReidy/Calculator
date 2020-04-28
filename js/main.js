// Create variables for elements that need to be clicked/changed
const numberBtns = document.querySelectorAll('.maingridnum');
const operationBtns = document.querySelectorAll('.sidegridnum');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clearButton');
const screenBtn = document.querySelector('.screennum');
const previousNum = "";
const currentNum = "";
const topRowSelector = document.querySelector('#topRow');

// Create variables to select operations text
let plusText = document.querySelector("#plus").textContent;
let subtractText = document.querySelector("#subtract").textContent;
let multiplyText = document.querySelector("#multiply").textContent;
let overText = document.querySelector('#divide').textContent;

//THE DIVIDE FUNCTION IN THE SWITCH STATEMENT IS NOT BEING TRIGGERED FOR SOME REASON. IS THERE SOMETHING WRONG WITH OVERTEXT QUERY SELECTOR FOR IT???

class Calculator {
    constructor(previousNum, currentNum) {
        this.previousNum = previousNum;
        this.currentNum = currentNum;
    }

    clear() {
        this.currentNum = "";
    }

    delete() {

    }

    appendNumber(number) {
        if ((number.includes('.')) && (this.currentNum.includes('.'))) return
        this.currentNum = this.currentNum.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentNum === "") return
        if (this.previousNum !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousNum = this.currentNum;
        this.currentNum = "";

    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousNum);
        const current = parseFloat(this.currentNum);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case plusText:
                computation = prev + current;
                break;
            case subtractText:
                computation = prev - current;
                break;
            case multiplyText:
                computation = prev * current;
                break;
            case overText:
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentNum = computation;
        this.operation = undefined;
        this.previousNum = "";
        //console.log(this.currentNum);
    }

    updateDisplay() {
        screenBtn.textContent = this.currentNum;
        //if (this.operation != null) {
            //screenBtn.textContent = this.previousNum + this.operation;
        //}
    }
}

const calculator = new Calculator(previousNum, currentNum);


numberBtns.forEach(button => {
    if (button != document.querySelector('#equals')) {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.textContent);
            calculator.updateDisplay();
            //console.log(typeof(button.textContent))
        })
    }
})

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

clearBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})




// function add(a, b) {
// 	return a + b;
//   }
  
// function subtract(a, b) {
// 	return a - b;
//   }
  
// function sum(array) {
// 	return array.reduce((total, current) => total + current, 0);
//   }
  
// function multiply(array) {
// 	return array.length
// 	    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
// 		: 0;
//   }
  




// let vClear = document.querySelector('#clearButton');
// let vZero = document.querySelector("#zero");
// let vPoint = document.querySelector("#point");
// let vEquals = document.querySelector("#equals");
// let vPlus = document.querySelector("#plus");
// let vOne = document.querySelector("#one");
// let vTwo = document.querySelector("#two");
// let vThree = document.querySelector("#three");
// let vSubtract = document.querySelector("#subtract");
// let vFour = document.querySelector("#four");
// let vFive = document.querySelector("#five");
// let vSix = document.querySelector("#six");
// let vMultiply = document.querySelector("#multiply");
// let vSeven = document.querySelector("#seven");
// let vEight = document.querySelector("#eight");
// let vNine = document.querySelector("#nine");

// let vScreen = document.querySelector("#textScreenNum");

// // Create variables to store current total and current number 
// let currentTotal = 0;
// let currentNum = 0;

// Create event listeners

// vClear.addEventListener('click', () => vScreen.textContent = "0");

// vZero.addEventListener('click', function () {
//     vScreen.textContent = "0";
//     currentNum = 0; 
// })

// // This complicates things significantly, because the screen text needs to change 
// // vPoint.addEventListener('click', function () {
// //     vScreen.textContent = "0";
// //     currentNum = 0; 
// // })

// //Need to create calculate function or display final calculation result (currentTotal?)
// // vEquals.addEventListener('click', function () {
// //     calculate(); 
// // })

// // vPlus.addEventListener('click', function () {

// //     add(); 
// // })


// vOne.addEventListener('click', function () {
//     vScreen.textContent = "1";
//     currentNum = 1; 
// })

// vTwo.addEventListener('click', function () {
//     vScreen.textContent = "2";
//     currentNum = 2; 
// })

// vThree.addEventListener('click', function () {
//     vScreen.textContent = "3";
//     currentNum = 3; 
// })

// //Fix this
// // vSubtract.addEventListener('click', function () {
// //     subtract(); 
// // })

// vFour.addEventListener('click', function () {
//     vScreen.textContent = "4";
//     currentNum = 4; 
// })

// vFive.addEventListener('click', function () {
//     vScreen.textContent = "5";
//     currentNum = 5; 
// })

// vSix.addEventListener('click', function () {
//     vScreen.textContent = "6";
//     currentNum = 6; 
// })

//Fix this
// vMultiply.addEventListener('click', function () {
//     multiply(); 
// })

// vSeven.addEventListener('click', function () {
//     vScreen.textContent = "7";
//     currentNum = 7; 
// })

// vEight.addEventListener('click', function () {
//     vScreen.textContent = "8";
//     currentNum = 8; 
// })

// vNine.addEventListener('click', function () {
//     vScreen.textContent = "9";
//     currentNum = 9; 
// })

//Fix this
// vDivide.addEventListener('click', function () {
//     divide(); 
// })
