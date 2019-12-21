var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")
var numSquares = 6;
var modeButtons = document.querySelectorAll(".mode")

// init();
function init(){
	// mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		// if(this.textContent === "Easy"){
		// 	numSquares = 3;
		// }else {
		// 	num = 6;
		// }
		// another way to write an if statement
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		// figure out how many squares to show
		// pick new colors
		// pick a new pickedColor
		// update page to reflect changes
	});
}
}




function reset(){
	// generate all new colors
	colors = generateRandomColors(numSquares)
	// pick a new random color from the array
	pickedColor = pickColor();
	// make the message display be empty
	messageDisplay.textContent = "";
	// change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
		 squares[i].style.display = "none"; 
		}
		// squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected")
// 	hardBtn.classList.remove("selected")
// 	numSquares = 3;
// 	// generate three random colors
// 	colors = generateRandomColors(numSquares)
// 	// pick a new color
// 	pickedColor = pickColor();
// 	colorDisplay = pickedColor;
// 	// chnage the colors of the top three squares alone
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else {
// 			squares[i].style.display = "none"
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected")
// 	easyBtn.classList.remove("selected")
// 	numSquares = 6
// 	colors = generateRandomColors(numSquares)
// 	// pick a new color
// 	pickedColor = pickColor();
// 	colorDisplay = pickedColor;
// 	// chnage the colors of the top three squares alone
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block"
// 	}
// });



resetButton.addEventListener("click", function(){
	// generate all new colors
	// colors = generateRandomColors(numSquares)
	// // pick a new random color from the array
	// pickedColor = pickColor();
	// // make the message display be empty
	// messageDisplay.textContent = "";
	// // change color display to match picked color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors";
	// // change colors of squares
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue"
	reset();
})

colorDisplay.textContent = pickedColor;

for(var i =0; i < squares.length; i++){
		// add initial coors to squaresss
	squares[i].style.backgroundColor = colors[i];

		// add click listeners to squares
	squares[i].addEventListener("click", function(){
			// grab color of picked square
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor)
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again!"
			}
			else{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "try again"
		}
		// compare color to pickedColor
	});
}

function changeColors(color){
	// loop through all the squares
	for(var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr =[]
	// repeat num times
	for(var i = 0; i< num; i++){
		// get random color and push into arr
		arr.push(randomColor())
	}
	// return  b bjnjjnkikthat array
	return arr;
}

function randomColor(){
	// pick "red" from 0 - 255
	var r =Math.floor(Math.random() * 256)
	// pick a "green" from 0 - 255
	var g =Math.floor(Math.random() * 256)
	// pick a "blue" from 0 - 255
	var b =Math.floor(Math.random() * 256)
	// "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}