
// Have pop up window alert user to play game...set as a variable


alert("Guess what letter I'm thinking of");

// these are all the choices the user can enter, I arranged it this way so you don't have to scroll horizonally on this ie like this comment is doing. ;)
var letters = ["a","b", "c", "d","e",
				"f","g","h","i","j","k",
				"l","m","n","o","p","q",
				"r","s","t","u","v","w",
				"y", "z"
				];

// var firstLetter;
// var secondLetter;
// var thirdLetter;
// var fourthLetter;
// var fifthLetter;
// var guessesLeft;
// var guessesSoFar;
// var winning;
// var losses;

// need to create a way for user input answer...assign another variable
var letterGuessed = []

if letterguessed(correctGuess){
	alert("Correct answer!");
}	else if (wrongGuess){
	alert("Wrong answer!");
	}

// create for loop since it needs to run through guesses. User has up to 5 guesses because I say so :)
for (i=0; i<5; i=+1){
	console.log(i);

// example of for loop
// loops through each index of the Array
for (var i = 0; i < letters.length; i++) {
	console.log (letters[i])
}

//NEED A KEY IN FUNCTION TO DISPLAY LETTERS ON BROWSER
// first letter, second letter, third letter, fourth letter, fifth letter

//add buttons bootstrap :)  <button id="button-1" class="btn btn-primary number" value="1"><h1>1</h1></button>

// create on click event to actually display content user clicks
// var buttonPressed = ""

// GuessingGame = function() {

// };

// GuessingGame.prototype = {
    
//};

// $("button").click(function(){
//    $("p").append("<b>Appended text</b>");
// });