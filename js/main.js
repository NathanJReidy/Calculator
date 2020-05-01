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
let pointText = document.querySelector('#point').textContent;


class Calculator {
    constructor(previousNum, currentNum) {
        this.previousNum = previousNum;
        this.currentNum = currentNum;
    }

    clear() {
        this.currentNum = "";
    }

    appendNumber(number) {
        if ((number.includes('.')) && (this.currentNum.includes('.'))) return;
        // else if (number == pointText) {
        //     // this.currentNum = this.currentNum.toString() + number.toString();
        //     this.currentNum = parseInt(this.currentNum) + number;
        //     console.log("ELSE IF TRIGGERED!");
        //     console.log(typeof(number));
        //     console.log(typeof(currentNum));
        //     console.log("Current num is: " + this.currentNum);
        else {
            this.currentNum = this.currentNum + parseInt(number);  
        }
        console.log(this.currentNum);
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
        if (this.operation != null) {
            screenBtn.textContent = this.previousNum + this.operation + this.currentNum;
        }
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


