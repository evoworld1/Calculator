//Declaring important variables

const mathOperator = document.querySelectorAll(".math-op");
const numPad = document.querySelector(".num-btn");
const numbers = document.querySelectorAll(".num");
const clearOperation = document.querySelector(".clear-op");
const clearInput = document.querySelector(".clear-input");
const inputDisp = document.getElementById("currentInput");
const historyDisp = document.getElementById("history");
const equals = document.querySelector(".equals");

let numArr = ["", ""];
let firstNum = "";
let secondNum = "";
let mathOp = "";
console.log(mathOp);

//Update display and variables accordingly to user's input
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    inputNum = num.textContent;
    if (inputDisp.textContent === "0") {
      inputDisp.textContent = inputNum;
      firstNum = parseInt(inputDisp.textContent);
    } else if (mathOp === "") {
      inputDisp.textContent += inputNum;
      firstNum = parseInt(inputDisp.textContent);
    } else if (mathOp != "" && mathOp != "=") {
      inputDisp.textContent += inputNum;
      secondNum = parseInt(inputDisp.textContent);
    }
  });
});

/* Only for tests
numPad.addEventListener("click", () => {
  console.log(firstNum, secondNum);
});
*/

// Update historyDisplay & numArr with new
// number upon clicking mathematical operator
mathOperator.forEach((operator) => {
  operator.addEventListener("click", function () {
    mathOp = operator.textContent;
    numArr.splice(0, 1, firstNum);
    inputDisp.textContent = "";
    historyDisp.textContent = firstNum + " " + mathOp;
  });
});

equals.addEventListener("click", () => {
  numArr.splice(1, 1, secondNum);

  if (mathOp !== "=") {
    historyDisp.textContent += " " + secondNum + " =";
  }
  operate();
  mathOp = "=";

  //for tests
  console.log(numArr);
  console.log(mathOp);
});

function add(a, b) {
  result = a + b;
}
function substract(a, b) {
  result = a - b;
}
function multiply(a, b) {
  result = a * b;
}
function divide(a, b) {
  result = a / b;
}

firstNum, secondNum;

function operate() {
  if (mathOp === "+") {
    add(firstNum, secondNum);
    inputDisp.textContent = result;
  } else if (mathOp === "-") {
    substract(firstNum, secondNum);
    inputDisp.textContent = result;
  } else if (mathOp === "×") {
    multiply(firstNum, secondNum);
    inputDisp.textContent = result;
  } else if (mathOp === "÷") {
    divide(firstNum, secondNum);
    inputDisp.textContent = result;
  }
}

clearOperation.addEventListener("click", () => {
  inputDisp.textContent = "0";
  historyDisp.textContent = "";
  numArr = ["", ""];
  mathOp = "";
  firstNum = "";
  secondNum = "";
});
