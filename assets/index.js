// Create Sudoku Board
function loadBoard() {
 }

loadBoard();


//<body onload="myFunction()"></body>

let top_grid1_answer_array = [1,2,3,4,5,6,7,8,9];  //snake case

// when user enters a value run a answerCheck function
// the answerCheck function will check if the entered value of
// the focused input(position-number) matches the index minus (-)
// 1 in the answer array

// if the value equals the value of index-1 change background color 
// green if it matches or red if it does not match

// add win animation at the end of the game with a winFunction
// check that none of the positions have a red background