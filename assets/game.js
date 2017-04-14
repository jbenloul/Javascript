	
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var i
    var randomLetter;
    var guessedLetters = ""

function gameStart(string){
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);
    	guesses = 10;
    	guessedLetters = "";
	      var counter =
	      "<li id='wins'> Wins:" + wins + "</li>" + 
	      "<li id='losses'> Losses: " + losses + "</li>" + 
	      "<li id='guesses'> Guesses: " + guesses + " left</li>" +
	      "<li id='guessesMade'> Letters Guessed: " + guessedLetters + "</li>";

          document.getElementById("score").innerHTML = counter;


}
     	function changeImage(){
		document.getElementById("hangImg").setAttribute ("src", "assets/images/Hangman"+(guesses-1)+".png");
 		}


	document.onkeyup = function(event){
		var userGuess = event.key;


			changeImage();
		if (userGuess === randomLetter){
			wins++;
			console.log(wins);
			document.getElementById("hangImg").setAttribute ("src", "assets/images/Hangmanwin.png");
			gameStart();

		}

		else if (userGuess !== randomLetter){
            guesses--;
            document.getElementById('guesses').innerHTML = 'Guesses: ' + guesses + ' left';
            guessedLetters = guessedLetters + event.key;
			var guessesElement = document.getElementById("guessesMade")
			guessesElement.innerHTML = "Letters Guessed: " + guessedLetters;

            console.log(guesses);


				if (guesses === 0){
					losses++;
					guesses = 10;
					console.log(losses);
					document.getElementById("hangImg").setAttribute ("src", "assets/images/Hangmanpopup.png");
					gameStart();
				}


			}
		}

		



