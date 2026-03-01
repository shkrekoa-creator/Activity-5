// Activity 5 Simple Math Operations Widget

console.log("Math Widget Started");

// Part A: Select elements

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const buttons = document.querySelectorAll(".operation");
const result = document.getElementById("result");
const clearButton = document.getElementById("clear");

console.log(number1);
console.log(number2);
console.log(buttons);
console.log(result);

// Part B: Event logger

function logEvent(event)
{
    console.log("Event type:", event.type);
    console.log("Target:", event.target);
    console.log("Text:", event.target.textContent);
}

// Part C: Math functions

function add(a, b)
{
    let answer = a + b;
    return answer;
}

function subtract(a, b)
{
    let answer = a - b;
    return answer;
}

function multiply(a, b)
{
    let answer = a * b;
    return answer;
}

function divide(a, b)
{
    if(b === 0)
    {
        return "Error: Cannot divide by zero";
    }

    let answer = a / b;
    return answer;
}

// Input validation

function validate()
{
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);

    if(isNaN(num1))
    {
        result.textContent = "Enter valid first number";
        return null;
    }

    if(isNaN(num2))
    {
        result.textContent = "Enter valid second number";
        return null;
    }

    return {num1, num2};
}

// Handle button click

function handleClick(event)
{
    logEvent(event);

    let values = validate();

    if(values == null)
    {
        return;
    }

    let num1 = values.num1;
    let num2 = values.num2;

    let operation = event.target.dataset.operation;

    let answer;

    if(operation === "add")
    {
        answer = add(num1, num2);
    }
    else if(operation === "subtract")
    {
        answer = subtract(num1, num2);
    }
    else if(operation === "multiply")
    {
        answer = multiply(num1, num2);
    }
    else if(operation === "divide")
    {
        answer = divide(num1, num2);
    }

    result.textContent = "Result: " + answer;
}

// Add event listeners

buttons.forEach(function(button)
{
    button.addEventListener("click", handleClick);
});

clearButton.addEventListener("click", function()
{
    number1.value = "";
    number2.value = "";
    result.textContent = "Result will appear here";
});