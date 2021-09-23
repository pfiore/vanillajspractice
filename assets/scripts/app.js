const defaultResult = 0;
let currentResult = defaultResult;



function getUserInputNumber() {
    return parseInt(userInput.value);
}

function writeLogOutput(operator, resultBeforeCalc, caclNumber) {
    const enteredNumber = getUserInputNumber();
    const calcDescription = `${currentResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDescription);

}


function add() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    writeLogOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    writeLogOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    writeLogOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    writeLogOutput('/', initialResult, enteredNumber);
}





addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

