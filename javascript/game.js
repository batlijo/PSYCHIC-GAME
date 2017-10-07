
// Have pop up window alert user to play game...set as a variable


alert("Guess what letter I'm thinking of");

// these are all the choices the user can enter, I arranged it this way so you don't have to scroll horizonally on this ie like this comment is doing. ;)
var letters = ["a","b", "c", "d","e",
				"f","g","h","i","j","k",
				"l","m","n","o","p","q",
				"r","s","t","u","v","w",
				"y", "z"
				];

// need to create a way for user input answer...assign another variable
var letterGuessed = []

if letterguessed(correctGuess){
	alert("Correct answer!");
}	else if (wrongGuess){
	alert("Wrong answer!");
	}

// create for loop since it needs to run through guesses. User has up to 5 guesses
for (i=0; i<5; i=+1){
	console.log(i);

// example of for loop
// loops through each index of the Array
for (var i = 0; i < letters.length; i++) {
	console.log (letters[i])
}


	
////code academy notes:
// This array holds the words we are going to choose from.
// Feel free to add new words!
// var words = ['cat', 'tree', 'swing', 'around', 'scientist'];

// This function will pick our word
//function chooseWord () {
    // Write code here


//NEED A KEY IN FUNCTION TO DISPLAY LETTERS ON BROWSER
// first letter, second letter, third letter, fourth letter, fifth letter
 <div class="panel-heading">
                    <h3 class="panel-title">Result</h3>
                </div>
                <div class="panel-body">
                    <h1 id="first-number"></h1>
                    <h1 id="operator"></h1>
                    <h1 id="second-number"></h1>
                    <hr>
                    <h1 id="result"></h1>
                </div>

//add buttons bootstrap :)  <button id="button-1" class="btn btn-primary number" value="1"><h1>1</h1></button>

// create on click event to actually display content user clicks
var buttonPressed = ""

GuessingGame = function() {

};

GuessingGame.prototype = {
    
};

$("button").click(function(){
    $("p").append("<b>Appended text</b>");
});