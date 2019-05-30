/* exported gameGenerator accountGenerator randomInteger */
/*
We've written a few tests for your Game Generator function which you can find them in the 'specs' folder.
By the end of this exercise, you'll be writing tests for the functions yourself.
*/

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator(limit) {
  let targetValue = randomInteger(limit);
  let guessCounter = 0;
  return {
    reset: () => {
      targetValue = randomInteger(limit);
      guessCounter = 0;
    },
    guess: (guessValue) => {
      guessCounter++;
      return (guessValue === targetValue);
    },
    numGuesses: () => {
      return guessCounter;
    },
  }
}

function accountGenerator(initial) {
  let balance = initial;

  return {
    withdraw: function(amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return `Here’s your money: $${amount}`;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
      balance = balance + amount;
      return `Your balance is: $${balance}`;
    }
  };
}
