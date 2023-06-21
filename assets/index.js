// Create Sudoku Board
//function loadBoard() {
// }

//loadBoard();


//<body onload="myFunction()"></body>

//let top_grid1_answer_array = [1,2,3,4,5,6,7,8,9];  //snake case

// when user enters a value run a answerCheck function
// the answerCheck function will check if the entered value of
// the focused input(position-number) matches the index minus (-)
// 1 in the answer array

// if the value equals the value of index-1 change background color 
// green if it matches or red if it does not match

// add win animation at the end of the game with a winFunction
// check that none of the positions have a red background


// Add event listers to the 9 buttons
// const element1 = document.getElementById("button1");
// element1.addEventListener("click", button1_Function());

// const element2 = document.getElementById("button2");
// element2.addEventListener("click", button2_Function);

// const element3 = document.getElementById("button3");
// element3.addEventListener("click", button3_Function);

// const element4 = document.getElementById("button4");
// element4.addEventListener("click", button4_Function);

// const element5 = document.getElementById("button5");
// element5.addEventListener("click", button5_Function);

// const element6 = document.getElementById("button6");
// element6.addEventListener("click", button6_Function);

// const element7 = document.getElementById("button7");
// element7.addEventListener("click", button7_Function);

// const element8 = document.getElementById("button8");
// element8.addEventListener("click", button8_Function);

// const element9 = document.getElementById("button9");
// element9.addEventListener("click", button9_Function);


// Define the functions that respond when a button is clicked
function button1_Function() {
    //document.getElementById("demo1").innerHTML = "Hello World 1";
    // let setNumb = document.getElementByIdl('button1').value;
    // document.getElementById('top-left-position1').value=setNumb;

    document.getElementById("top-left-position1").value = document.getElementById("button1").value;
    //alert("Button1 was clicked.");
}

function button2_Function() {
    document.getElementById("demo2").innerHTML = "Hello World 2";
}

function button3_Function() {
    document.getElementById("demo3").innerHTML = "Hello World 3";
}

function button4_Function() {
    document.getElementById("demo4").innerHTML = "Hello World 4";
}

function button5_Function() {
    document.getElementById("demo5").innerHTML = "Hello World 5";
}

function button6_Function() {
    document.getElementById("demo6").innerHTML = "Hello World 6";
}

function button7_Function() {
    document.getElementById("demo7").innerHTML = "Hello World 7";
}

function button8_Function() {
    document.getElementById("demo8").innerHTML = "Hello World 8";
}

function button9_Function() {
    document.getElementById("demo9").innerHTML = "Hello World 9";
}

// $("p").click(function(){
//    alert("The paragraph was clicked.");
//  });


 $(document).ready(function() {
 //$(this).click(function() {
$("button").click(function() {

    //here the value is stored in a variable
    let numb = $(input:text).val();
    document.getElementById,("demoNumb").innerHTML = numb;
    let activeElement = document.activeElement;
    //console.log(activeElement.tagName, activeElement.type || 'N/A');
    //alert(activeElement.tagName, activeElement.type || 'N/A');
  });0
});