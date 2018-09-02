var name = prompt("Please, what is your name?");
		alert("Welcome " + name);
		var secret = 42;
		for(var fingers = 1; fingers <= 3; fingers++) {
			var number = prompt("What is your guess for our secret number?");
			if(number == secret) {
				alert("Congratulations! You guessed correctly!");
				break;
			} else if(number > secret) {
				alert("The secret number is less than " + number + ".");
			} else {
				alert("The secret number is greater than " + number + ".");	
			}
		}
