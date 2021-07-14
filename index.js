let displayValue = "";
let firstNum = 0;
let secondNum = 0;
let chosenOperator = "";

//logic
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    if(b == 0){
        alert("Divide by 0 error");
        return;
    }
    return a / b;
}

function multiply(a, b){
    return a * b;
}

//main function
function operate(operator, num1, num2){
    if(operator == "+"){
        return add(num1, num2);
    }

    if(operator == "/"){
        return divide(num1, num2);
    }

    if(operator == "*"){
        return multiply(num1, num2);
    }

    if(operator == "-"){
        return subtract(num1, num2);
    }
}

//animations and data
const buttons = document.querySelectorAll(".actual")
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(){
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
    })
});

document.getElementById("clear").addEventListener("click", function(){
    displayValue = "";
    document.getElementById("visual").textContent = displayValue;
})

document.getElementById("switcher").addEventListener("click", function(){
    displayValue = parseFloat(displayValue) * -1;
    document.getElementById("visual").textContent = displayValue.toString();
})

const operators = document.querySelectorAll(".operation");
operators.forEach(function(currentBtn){
    currentBtn.addEventListener("click", function(){
        chosenOperator = currentBtn.value;
        firstNum = parseFloat(displayValue);
        displayValue = "";
    })
})

document.getElementById("submit").addEventListener("click", function(){
    secondNum = parseFloat(displayValue);
    firstNum = operate(chosenOperator, firstNum, secondNum);

    if(firstNum.toString().length > 12){
        alert("Cannot display such large values. Please try again.");
        firstNum = 0;
        secondNum = 0;
        displayValue = ""
        chosenOperator = "";
        document.getElementById("visual").textContent = displayValue;
        return;
    }

    displayValue = firstNum.toString();
    document.getElementById("visual").textContent = displayValue;
})


