//Declaring important variables

const mathSigns = document.querySelectorAll(".math-sign");
const numPad = document.querySelector(".num-btn");
const numbers = document.querySelectorAll(".num");
const clearEntry = document.querySelector(".clear-entry");
const clearAll = document.querySelector(".clear-all");
const inputDisplay = document.getElementById("currentInput");
const historyDisplay = document.getElementById("history");
const equals = document.querySelector(".equals");
const decimal = document.getElementById(".equals");

function onStart() {
  inputDisplay.textContent = "";
}
onStart();

let currentOperand = 0;
let previousOperand = "";
let selectedSign = "";

function checkForDecimal() {}
//Update display and variables accordingly to user's input
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    input = num.textContent;
    if (inputDisplay.textContent === "") {
      if (num.textContent === ".") {
        return;
      } else {
        inputDisplay.textContent = input;
        currentOperand = parseFloat(inputDisplay.textContent);
      }
    } else if (inputDisplay.textContent === currentOperand) {
      onStart();
    } else {
      if (num.textContent === "." && inputDisplay.textContent.includes(".")) {
        return;
      } else {
        inputDisplay.textContent += input;
        currentOperand = parseFloat(inputDisplay.textContent);
      }
    }
  });
});

mathSigns.forEach((sign) => {
  sign.addEventListener("click", function () {
    if (selectedSign === "=" || selectedSign === "") {
      selectedSign = sign.textContent;
      historyDisplay.textContent = currentOperand;
      previousOperand = parseFloat(historyDisplay.textContent);
      onStart();
    } else {
      operate();
      selectedSign = sign.textContent;
      historyDisplay.textContent = currentOperand;
      previousOperand = parseFloat(historyDisplay.textContent);
      onStart();
    }
  });
});

equals.addEventListener("click", () => {
  operate();
  selectedSign = "=";
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
  if (b === 0) {
    inputDisplay.textContent = "Please don't";
  } else {
    result = a / b;
  }
}

function operate() {
  if (selectedSign === "+") {
    add(previousOperand, currentOperand);
  } else if (selectedSign === "-") {
    substract(previousOperand, currentOperand);
  } else if (selectedSign === "×") {
    multiply(previousOperand, currentOperand);
  } else if (selectedSign === "÷") {
    divide(previousOperand, currentOperand);
  }

  if (result % 1 === 0) {
    currentOperand = result;
  } else if (result % 1 !== 0) {
    currentOperand = result.toFixed(3);
  }

  if (result > 10000000000 || result < -10000000000) {
    currentOperand = result.toExponential(5);
  }

  inputDisplay.textContent = currentOperand;
}

clearAll.addEventListener("click", () => {
  inputDisplay.textContent = "";
  historyDisplay.textContent = "";
  selectedSign = "";
  previousOperand = "";
  currentOperand = "";
});

clearEntry.addEventListener("click", () => {
  inputDisplay.textContent = "";
});
