function start() {
			var name = prompt("Please, what is your name?");
			alert("Welcome " + name);
		}
		function guess() {
			var number = prompt("What is your guess for our secret number?");
			if(number == secret) {
				alert("Congratulations! You guessed correctly!");
				return true;
			} else if(number > secret) {
				alert("The secret number is less than " + number + ".");
			} else {
				alert("The secret number is greater than " + number + ".");	
			}
			return false;
		}
		start();
		var secret = 42;
		for(var fingers = 1; fingers <= 3; fingers++) {
			var itWasCorrect = guess();
			if(itWasCorrect) {
				break;
			}
		}
