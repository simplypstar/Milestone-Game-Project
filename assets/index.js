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


// Since the first element in an array starts at position 0, position 0 will always be a blank spqace
// Position 1 begind the the first space in the game grid
const board_1_Array = ["","6","","1","","4","5","8","9","","7","","3","","2","1","","5","","8","","4","","7","","","2","3",
"4","","3","","7","","2","","6","","1","9","6","4","","","","","7","","8","","1","2","","","","","6","9","","","","7",
"","","","","2","","","","9","","4","","8","7","2","","6","5","3",""];

const board_2_Array = ["","5","","9","","4","8","7","6","","","8","1","2","","3","9","","","","6","2","5","","7","1","","","9",
"1","","","7","3","2","","4","8","","4","5","","2","","","","2","7","","9","","","","","8","","8","","6","","","","2",
"","","5","","4","","7","","","","7","2","","8","","1","","5","4"];

const board_3_Array = ["","4","2","","","1","9","7","","8","","","8","","7","","","","","","7","","8","","4","3","","","",
"3","","9","","","2","7","","1","","7","2","","5","","","","","","9","7","","","1","","8","","4","","","","5","","9",
"","","","","7","","","","3","","","9","2","4","","3","5","1",""];

const board_4_Array = ["","9","","3","6","8","","2","5","","","2","7","","","","","8","3","6","5","","4","","2","9","1","","",
"9","1","","","","3","","","","","","","4","","","","","","","","5","","1","2","9","6","","7","9","","6","2","","",
"","","3","2","","","8","","6","","8","","5","","7","","","2","9"];


function startGame() {
// Process the game chosen by its index number from the dropdown list
// Call the fillBoard function to display the selected game board
    var gameNumb = document.getElementById("selectGame").selectedIndex;
    //alert(gameNumb);

    switch (gameNumb) {
        case 0:
            alert("Select a game");
            break;
        case 1:  
            fillBoard(board_1_Array);
            break;
        case 2:  
            fillBoard(board_2_Array);
            break;
        case 3:  
            fillBoard(board_3_Array);
        case 3:  
            fillBoard(board_4_Array);
            break;
        default:
            break;
    }
}


function fillBoard(arry) { 

    document.getElementById("top_left_position1").value =  arry[1];
    document.getElementById("top_left_position2").value = arry[2];
    document.getElementById("top_left_position3").value = arry[3];
    document.getElementById("top_left_position4").value = arry[4];
    document.getElementById("top_left_position5").value = arry[5];
    document.getElementById("top_left_position6").value = arry[6];
    document.getElementById("top_left_position7").value = arry[7];
    document.getElementById("top_left_position8").value = arry[8];
    document.getElementById("top_left_position9").value = arry[9];
    document.getElementById("top_center_position1").value = arry[10];
    document.getElementById("top_center_position2").value = arry[11];
    document.getElementById("top_center_position3").value = arry[12];
    document.getElementById("top_center_position4").value = arry[13];
    document.getElementById("top_center_position5").value = arry[14];
    document.getElementById("top_center_position6").value = arry[15];
    document.getElementById("top_center_position7").value = arry[16];
    document.getElementById("top_center_position8").value = arry[17];
    document.getElementById("top_center_position9").value = arry[18];
    document.getElementById("top_right_position1").value = arry[19];
    document.getElementById("top_right_position2").value = arry[20];
    document.getElementById("top_right_position3").value = arry[21];
    document.getElementById("top_right_position4").value = arry[22];
    document.getElementById("top_right_position5").value = arry[23];
    document.getElementById("top_right_position6").value = arry[24];
    document.getElementById("top_right_position7").value = arry[25];
    document.getElementById("top_right_position8").value = arry[26];
    document.getElementById("top_right_position9").value = arry[27];
    document.getElementById("middle_left_position1").value = arry[28];
    document.getElementById("middle_left_position2").value = arry[29];
    document.getElementById("middle_left_position3").value = arry[30];
    document.getElementById("middle_left_position4").value = arry[31];
    document.getElementById("middle_left_position5").value = arry[32];
    document.getElementById("middle_left_position6").value = arry[33];
    document.getElementById("middle_left_position7").value = arry[34];
    document.getElementById("middle_left_position8").value = arry[35];
    document.getElementById("middle_left_position9").value = arry[36];
    document.getElementById("middle_center_position1").value = arry[37];
    document.getElementById("middle_center_position2").value = arry[38];
    document.getElementById("middle_center_position3").value = arry[39];
    document.getElementById("middle_center_position4").value = arry[40];
    document.getElementById("middle_center_position5").value = arry[41];
    document.getElementById("middle_center_position6").value = arry[42];
    document.getElementById("middle_center_position7").value = arry[43];
    document.getElementById("middle_center_position8").value = arry[44];
    document.getElementById("middle_center_position9").value = arry[45];
    document.getElementById("middle_right_position1").value = arry[46];
    document.getElementById("middle_right_position2").value = arry[47];
    document.getElementById("middle_right_position3").value = arry[48];
    document.getElementById("middle_right_position4").value = arry[49];
    document.getElementById("middle_right_position5").value = arry[50];
    document.getElementById("middle_right_position6").value = arry[51];
    document.getElementById("middle_right_position7").value = arry[52];
    document.getElementById("middle_right_position8").value = arry[53];
    document.getElementById("middle_right_position9").value = arry[54];
    document.getElementById("bottom_left_position1").value = arry[55];
    document.getElementById("bottom_left_position2").value = arry[56];
    document.getElementById("bottom_left_position3").value = arry[57];
    document.getElementById("bottom_left_position4").value = arry[58];
    document.getElementById("bottom_left_position5").value = arry[59];
    document.getElementById("bottom_left_position6").value = arry[60];
    document.getElementById("bottom_left_position7").value = arry[61];
    document.getElementById("bottom_left_position8").value = arry[62];
    document.getElementById("bottom_left_position9").value = arry[63];
    document.getElementById("bottom_center_position1").value = arry[64];
    document.getElementById("bottom_center_position2").value = arry[65];
    document.getElementById("bottom_center_position3").value = arry[66];
    document.getElementById("bottom_center_position4").value = arry[67];
    document.getElementById("bottom_center_position5").value = arry[68];
    document.getElementById("bottom_center_position6").value = arry[69];
    document.getElementById("bottom_center_position7").value = arry[70];
    document.getElementById("bottom_center_position8").value = arry[71];
    document.getElementById("bottom_center_position9").value = arry[72];
    document.getElementById("bottom_right_position1").value = arry[73];
    document.getElementById("bottom_right_position2").value = arry[74];
    document.getElementById("bottom_right_position3").value = arry[75];
    document.getElementById("bottom_right_position4").value = arry[76];
    document.getElementById("bottom_right_position5").value = arry[77];
    document.getElementById("bottom_right_position6").value = arry[78];
    document.getElementById("bottom_right_position7").value = arry[79];
    document.getElementById("bottom_right_position8").value = arry[80];
    document.getElementById("bottom_right_position9").value = arry[81];


}
