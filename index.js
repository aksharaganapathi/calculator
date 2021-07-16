let displayValue = "";
let numArr = []
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

//animations
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

//data
document.getElementById("clear").addEventListener("click", function(){
    displayValue = "";
    numArr = [];
    document.getElementById("visual").textContent = displayValue;
})

document.getElementById("switcher").addEventListener("click", function(){
    displayValue = parseFloat(displayValue) * -1;
    document.getElementById("visual").textContent = displayValue.toString();
})

const operators = document.querySelectorAll(".operation");
operators.forEach(function(currentBtn){    
    currentBtn.addEventListener("click", function(){

        if(numArr.indexOf(parseFloat(displayValue)) == -1){
            numArr.push(parseFloat(displayValue));
        }

        console.log("og display val: " + displayValue);
        console.log(numArr);

        if(numArr.length == 2){
            calculation();
        }

        chosenOperator = currentBtn.value;
        displayValue = "";

    })
})

document.getElementById("submit").addEventListener("click", function(){
    numArr.push(parseFloat(displayValue));
    calculation();
});

function calculation(){
    console.log(numArr);
    firstNum = operate(chosenOperator, numArr[0], numArr[1]);
    numArr.pop();
    numArr.pop();
    console.log(numArr);

    if(!(Number.isInteger(firstNum))){
        firstNum = firstNum.toFixed(3);
    }


    if(firstNum.toString().length > 12){
        alert("Cannot display such large values. Please try again.");
        numArr = [];
        displayValue = ""
        chosenOperator = "";
        document.getElementById("visual").textContent = displayValue;
        return;
    }

    displayValue = firstNum.toString();
    console.log("this is display val: " + displayValue);
    numArr.push(parseFloat(displayValue));
    document.getElementById("visual").textContent = displayValue;
}
