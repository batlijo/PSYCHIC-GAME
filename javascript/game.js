
// Have pop up window alert user to play game
alert("Guess what letter I'm thinking of");

// these are all the choices the user can enter, I arranged it this way so you don't have to scroll horizonally on this ie like this comment is doing. ;)
var letters = ["a","b", "c", "d","e",
				"f","g","h","i","j","k",
				"l","m","n","o","p","q",
				"r","s","t","u","v","w",
				"y", "z"];

// need to create a way for user input answer...assign another variable
var letterGuessed = []



// create for loop since it nees to run through guesses.
for (i=0; i<5; i++){
	console.log(i);
	if (answer === guess) {
		alert("You guessed correctly");
		break;
	}else{ answer !
		alert("Sorry Try Again");
	}
}
