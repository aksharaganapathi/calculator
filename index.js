let displayValue = "";
let numArr = [];
let chosenOperator = "";

function add(a, b){ 
    return a + b; 
}

function subtract(a, b){ 
    return a - b; 
}

function multiply(a, b){ 
    return a * b; 
}

function divide(a, b){
    if(b === 0){
        alert("Divide by 0 error");
        resetCalculator();
        return null; 
    }
    return a / b;
}

function resetCalculator() {
    displayValue = "";
    numArr = [];
    chosenOperator = "";
    document.getElementById("visual").textContent = "0";
}

function operate(operator, num1, num2){
    switch(operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        default: return num2; 
    }
}

const buttons = document.querySelectorAll(".actual");
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(){
        if (currentBtn.value === "." && displayValue.includes(".")) return;
        
        displayValue += currentBtn.value;
        document.getElementById("visual").textContent = displayValue.substring(0, 12);
    });
});

const main = document.querySelectorAll(".main");
main.forEach(function(currentBtn){
    currentBtn.addEventListener("click", function(){
        currentBtn.classList.add("dark");
        setTimeout(function(){
            currentBtn.classList.remove("dark");
        }, 200);
    });
});

const numbersAndOperations = document.querySelectorAll(".number");
numbersAndOperations.forEach(function(currentBtn){
    currentBtn.addEventListener("click", function(){
        currentBtn.classList.add("darker");
        setTimeout(function(){
            currentBtn.classList.remove("darker");
        }, 200);
    });
});

document.getElementById("clear").addEventListener("click", resetCalculator);

document.getElementById("switcher").addEventListener("click", function(){
    if (!displayValue) return;
    displayValue = (parseFloat(displayValue) * -1).toString();
    document.getElementById("visual").textContent = displayValue;
});

const operators = document.querySelectorAll(".operation");
operators.forEach(function(currentBtn){    
    currentBtn.addEventListener("click", function(){
        if (displayValue !== "") {
            numArr.push(parseFloat(displayValue));
        }

        if (numArr.length === 2 && chosenOperator) {
            calculation();
        } else if (numArr.length === 0) {
            numArr.push(0);
        }

        chosenOperator = currentBtn.value;
        displayValue = ""; 
    });
});

document.getElementById("submit").addEventListener("click", function(){
    if (displayValue !== "" && chosenOperator !== "") {
        numArr.push(parseFloat(displayValue));
        calculation();
        chosenOperator = ""; 
    }
});

function calculation(){
    if (numArr.length < 2) return;

    let result = operate(chosenOperator, numArr[0], numArr[1]);
    
    if(result === null){
        return;
    }

    if(!Number.isInteger(result)){
        result = parseFloat(result.toFixed(3));
    }

    if(result.toString().length > 12){
        alert("Cannot display such large values. Please try again.");
        resetCalculator();
        return;
    }

    numArr = [result]; 
    displayValue = result.toString();
    document.getElementById("visual").textContent = displayValue;
}
