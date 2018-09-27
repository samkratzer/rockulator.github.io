var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var stringDisplay = document.getElementById("string-display");
var rock = document.getElementById("the-rock");
var toad = document.getElementById("toad");
var button = document.getElementById("finish-job");
var explosion = document.getElementById("explosion");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
toad.addEventListener("click", zoomin);
button.addEventListener("click", explode);

function add() {

var one = parseFloat(numOne.value) || 0;
var two = parseFloat(numTwo.value) || 0;
var passedString = (numOne.value + numTwo.value) || 0;
var myString = passedString.toLowerCase();

rock.className = "hide";
addSum.innerHTML = display(one+two);
stringDisplay.innnerHTML = trumpcheck(myString);
}

function display(number){
	if(number>10000){
	rock.className = "animated-gif";
 		return "hey... that's a pretty big number";
 	}
 	else if (number<10){
 		return "not very much";
 	}
 	else return "your number is: " + number;
}
	  
function trumpcheck(text){
	if(text.includes("trump")){
		document.getElementById("toad").className = "big-splash";
		document.getElementById("rock").className = "hide";
		return text;
	}
 	else{
 		toad.className = "hide";
 		return text;
 	}
 }

function zoomin(){
	var currWidth = toad.clientWidth;
	rock.className = "hide";
	addSum.innerHTML = "oh boy... when you touch the mushroom, it grows!";
	if (currWidth > 1000){
		button.className = "textbox";
	}	
	else{
        	toad.style.width = (currWidth + 150) + "px";
        }
}

function explode(){
	rock.className = "hide";
	toad.className = "hide";
	document.getElementById("heading").className = "hide";
	document.getElementById("tagline").className = "hide";
	document.getElementById("number-fields").className = "hide";
	addSum.className = "hide";
	button.className = "hide";
	explosion.className = "big-splash";
}
	
