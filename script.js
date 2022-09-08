


let calcButtons = document.querySelectorAll(".btn");
let operationButtons = document.querySelectorAll(".operand");
let equal = document.querySelector(".equals");
let del = document.querySelector(".delete");
let allClear = document.querySelector(".allClear");
let previousOperand = document.querySelector(".previousOperand");
let currentOperand = document.querySelector(".currentOperand");

let previousOperator = " ";
let currentOperator = " ";
let operator = " ";

calcButtons.forEach(function(button){
    button.addEventListener("click", function(){
    let clicked = button.innerText;
    appendNumber(clicked);
    updateDisplay();
    })
})

function appendNumber([number]){
    for(i=0 ; i<number.length ; i++){
        if(number === "." && currentOperator.includes(".")) return
        currentOperator += number[i]
    }
    
}

operationButtons.forEach(function(button){
    button.addEventListener("click", function(){
    let opClicked = button.innerText;
    chooseOperation(opClicked)
    updateDisplay();
    })
})

equal.addEventListener("click", function(){
    compute();
    updateDisplay();
})


allClear.addEventListener("click", function(){
    clear();
    updateDisplay();
})

del.addEventListener("click", function(){
    deleteNumber();
    updateDisplay();
})


function chooseOperation (operation){
    if(currentOperator === " ") return
    if(previousOperator !== " "){
        compute()
    }
operator = operation ;
previousOperator = currentOperator;
currentOperator = " ";
}



function compute(){
    
let computation;
if(isNaN(parseFloat(previousOperator)) || isNaN(parseFloat(currentOperator))) return

switch (operator){
    case "+" :
        computation = parseFloat(previousOperator) + parseFloat(currentOperator)
        break 
    case "-" :
        computation = parseFloat(previousOperator) - parseFloat(currentOperator)
            break 
    case "x" :
        computation = parseFloat(previousOperator) * parseFloat(currentOperator)
                break 
    case "/" :
        computation = parseFloat(previousOperator) / parseFloat(currentOperator)
                    break 
    default: return                    
}
currentOperator = computation;
previousOperator = " ";
operator = " ";
}

function clear(){
    previousOperator = " ";
    currentOperator = " ";
    operator = " ";
}

function deleteNumber() {
    currentOperator = currentOperator.toString().slice(0, -1);
}

function commaNumber(number) {
let floatNumber = number.toString();
let leftSide = parseFloat(floatNumber.split(".")[0]);
let decimalSide = floatNumber.split(".")[1]
let numberDisplay;
if(isNaN(leftSide)){
    numberDisplay = " "
}else{
    numberDisplay = leftSide.toLocaleString("en", {maximumFractionDigits: 0})
}
if(decimalSide != null){
    return numberDisplay + "." + decimalSide
}else{
    return numberDisplay
}
}

function updateDisplay(){
currentOperand.innerHTML = commaNumber(currentOperator)
if(operator != null){
previousOperand.innerHTML = commaNumber(previousOperator) + " " + operator  
}}


let checkbox2 = document.querySelector("#check1");
let checkbox3 = document.querySelector("#check2");
let body = document.querySelector("body");


$('.toggle').click(function() {
    $('.toggle').not(this).prop('checked', false);
 if( this.id == "check1"){
    
    body.classList.add("theme2")
    body.classList.remove("theme3")

 }else if( this.id == "check2"){
    body.classList.add("theme3")
    body.classList.remove("theme2")
 }else {
    body.classList.remove("theme2")
    body.classList.remove("theme3")
 }
}); 



