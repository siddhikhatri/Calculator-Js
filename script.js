let display = document.getElementById("inputText");


// Add value to display
function press(value) {
    if(display.value === "0")
    {
        display.value=value;
    }
    else
    {
        display.value += value; //appends value into textbox
    }
}

// Calculate result
function displayResult() {
    let expression = display.value; //stores the value inside the text box
    let result;

    if(expression.includes("+"))
    {
        let numbers = expression.split("+");
        result = Number(numbers[0]) + Number(numbers[1]);
    } 
    else if(expression.includes("-"))
    {
        let numbers = expression.split("-");
        result = Number(numbers[0]) - Number(numbers[1]);
    } 
    else if(expression.includes("*"))
    {
        let numbers = expression.split("*");
        result = Number(numbers[0]) * Number(numbers[1]);
    } 
    else if(expression.includes("/"))
    {
        let numbers = expression.split("/");
        result = Number(numbers[0]) / Number(numbers[1]);
    } 
    else
    {
        result=expression;//if no operator then show as well
    }
    display.value=result;//displays answer
    console.log(display.value);
}

// Clear display
function clearInput() {
        display.value="0";//shows 0 in display [inputbox]    
}

function clearAllInput(){
    display.value=""; //resets and also removes 0
}
