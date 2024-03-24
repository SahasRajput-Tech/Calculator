let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let displayValue = '';

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function appendNumber(number) {
  if (currentOperator === '') {
    firstNumber += number;
    displayValue = firstNumber;
  } else {
    secondNumber += number;
    displayValue = secondNumber;
  }
  updateDisplay();
}

function appendDecimal() {
  if (currentOperator === '') {
    if (!firstNumber.includes('.')) {
      firstNumber += '.';
      displayValue = firstNumber;
      updateDisplay();
    }
  } else {
    if (!secondNumber.includes('.')) {
      secondNumber += '.';
      displayValue = secondNumber;
      updateDisplay();
    }
  }
}

function setOperator(operator) {
  if (firstNumber !== '' && secondNumber !== '') {
    calculate();
  }
  currentOperator = operator;
}

function clearDisplay() {
  firstNumber = '';
  secondNumber = '';
  currentOperator = '';
  displayValue = '';
  updateDisplay();
}

function calculate() {
  if (currentOperator === '+') {
    displayValue = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (currentOperator === '-') {
    displayValue = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (currentOperator === '*') {
    displayValue = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (currentOperator === '/') {
    if (parseFloat(secondNumber) === 0) {
      displayValue = "Error: Division by zero";
    } else {
      displayValue = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
  }
  displayValue = displayValue.toFixed(2);
  firstNumber = displayValue.toString();
  secondNumber = '';
  currentOperator = '';
  updateDisplay();
}
