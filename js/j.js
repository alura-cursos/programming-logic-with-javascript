var guessInputField = document.getElementById("guess");
	var numberOfAttemptsSoFar = 0;
	var attempts = [];
	function randomNumberWithMaximum(maximum) {
		return Math.floor(Math.random() * maximum) + 1;
	}
	function start() {
		var name = prompt("Please, what is your name?");
		alert("Welcome " + name + "!");
		guessInputField.focus();
	}
	function check() {
		var guess = guessInputField.value;
		var hasAlreadyGuessed = attempts.indexOf(guess) != -1;
		if(hasAlreadyGuessed) {
			alert("You have already guessed " + guess + ".");
			return;
		}
		// console.log(attempts);
		numberOfAttemptsSoFar++;
		if(guess == secret) {
			alert("Congratulations! You guessed correctly in " + numberOfAttemptsSoFar + " attempts!");
			document.getElementById("guessing-game").style.display = "none";
		} else if(guess > secret) {
			alert("The secret number is less than " + guess + ".");
		} else {
			alert("The secret number is greater than " + guess + ".");	
		}
		attempts.push(guess);
		guessInputField.focus();
	}
	var secret = randomNumberWithMaximum(100);
	document.getElementById("check").onclick = check;
	start();
