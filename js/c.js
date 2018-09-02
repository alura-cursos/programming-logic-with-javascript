var name = prompt("Please, what is your name?");
		alert("Welcome " + name);
		var number = prompt("What is your guess for our secret number?");
		var secret = 42;
		if(number == secret) {
			alert("Congratulations! You guessed correctly!");
		} else {
			alert("I am sorry, " + number + " is not our secret number!");
		}
