function placeABet(guess) {
  (function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  });

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// The original code mixes up function declarations and function expressions. 
// Because generateRandomInt is wrapped in parentheses in our original code, 
// it is a function expression rather than a function declaration. Function expressions are often unnamed. 
// They can be given a name, like generateRandomInt, but the name is only available from inside the function. 
// This is why line 6 raised an error, telling you that generateRandomInt is undefined.