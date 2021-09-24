const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets user
function getUserInputNumber() {
    return parseInt(userInput.value);
}

// Output Log
function writeLogOutput(operator, resultBeforeCalc, caclNumber) {
    const enteredNumber = getUserInputNumber();
    const calcDescription = `${currentResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDescription);

}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier, 
        prevResult: prevResult,
        number: operationNumber,
        newResult: newResult
    };
 
}



// Calculation Logic
function add() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeLogOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeLogOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);

}

function multiply() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeLogOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);

}

function divide() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeLogOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);

}


// Button Listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

