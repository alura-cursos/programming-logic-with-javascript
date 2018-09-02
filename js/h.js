var name = prompt("Please, what is your name?");
		alert("Welcome " + name);
		var number = prompt("What is your guess for our secret number?");
		var secret = 42;
		if(number == secret) {
			alert("Congratulations! You guessed correctly!");
		} else if(number > secret) {
			alert("The secret number is lesser than " + number);
		} else {
			alert("The secret number is greater than " + number);	
		}
