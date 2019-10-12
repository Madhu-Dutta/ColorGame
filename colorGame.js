var numSquares = 6;
var colors = [];
var pickedColor;
//to select all 6 squares at once(querySelectorAll)
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("DisplayColor");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeBtn();
    setUpSquaresBtn();
    reset();  
}

function setUpModeBtn(){
//mode buttons
for(var i=0; i<modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){

        //hard level automatic selected
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");

        //fig out how many squares to show
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

        reset();
    }) 
  } 
}

function setUpSquaresBtn(){
    for(var i=0; i<squares.length; i++){ 
        //add click eventlisteners to squares
        squares[i].addEventListener("click", function(){

        //grab colour of the clicked square  
        var clickedColor = this.style.backgroundColor; 

        //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "CORRECT";
                changeColors(clickedColor);
                h1Display.style.backgroundColor = clickedColor;
                //change "new Colors" text to "Play Again" in resetBtn after win.
                resetBtn.innerHTML = "Play Again? ";
            }else{
                this.style.backgroundColor = "black"; 
                messageDisplay.textContent = "Try Again";
            }
        })
    }      
}   

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    
    //pick a new color frm array
    pickedColor = pickColor();
    
    //change colorDisplay to match new colors
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Color";
    h1Display.style.backgroundColor = "steelblue";
    messageDisplay.textContent = ""; 
    
    //change colors of squares
    for(var i=0; i<squares.length; i++){
    if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
       }else{
        squares[i].style.display = "none";
       }
    }        
}

resetBtn.addEventListener("click", function(){
  reset();  
})

function changeColors(color){
    
    //loop through all the squares
    for(var i=0; i<squares.length; i++){
         //change all colors to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    
//make an array
var arr = [];
//loop/repeat num times
    for(var i = 0; i < num; i++){
        //get random num & push into array
        arr.push(randomColor());
    }
    //add num random colors to the array
    //return value of array
return arr;
}

function randomColor(){
 //pick a red from 0-255   
    var r = Math.floor(Math.random() * 256);
 //pick a green from 0-255      
    var g = Math.floor(Math.random() * 256);
 //pick a blue from 0-255       
    var b = Math.floor(Math.random() * 256);
    //add space after commas as rgb needs spaces after comma & every value. or picked color won't match clicked color.
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
