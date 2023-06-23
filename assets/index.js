// Create JavaScript to control the Sudoku Board

// Define activeInput as global variable to be used with multipe functions
var activeInput = "";

// Click on an input field to get its Element Id; this input field becomes the ActiveElement (selected element)
// This elements id name is saved to the activeInput global variable
// This global variable will be used with each of the buttlon functions
function getActivePosition() {
    activeInput = document.activeElement.id;
}


// Define the functions that respond when a button is clicked. 
// After selecting an input field, press button (1-9) that corresponds with the number (1-9) that will
//   be entered into the ActiveElement (active input field)
function button1_Function() {
    document.getElementById(activeInput).value = document.getElementById("button1").value;
}

function button2_Function() {
    document.getElementById(activeInput).value = document.getElementById("button2").value;
}

function button3_Function() {
    document.getElementById(activeInput).value = document.getElementById("button3").value;
}

function button4_Function() {
    document.getElementById(activeInput).value = document.getElementById("button4").value;
}

function button5_Function() {
    document.getElementById(activeInput).value = document.getElementById("button5").value;
}

function button6_Function() {
    document.getElementById(activeInput).value = document.getElementById("button6").value;
}

function button7_Function() {
    document.getElementById(activeInput).value = document.getElementById("button7").value;
}

function button8_Function() {
    document.getElementById(activeInput).value = document.getElementById("button8").value;
}

function button9_Function() {
    document.getElementById(activeInput).value = document.getElementById("button9").value;
}


