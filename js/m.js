var secret = Math.floor(Math.random() * 100) + 1;
	function start() {
		var name = prompt("Please, what is your name?");
		alert("Welcome " + name + "!");
	}
	function check() {
		var guess = document.getElementById("guess").value;
		if(guess == secret) {
			alert("Congratulations! You guessed correctly!");
		} else if(guess > secret) {
			alert("The secret number is less than " + guess + ".");
		} else {
			alert("The secret number is greater than " + guess + ".");	
		}
	}
	document.getElementById("check").onclick = check;
	start();
