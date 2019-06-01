/* exported gameGenerator accountGenerator randomInteger */
/*
We've written a few tests for your Game Generator function which you can find them in the 'specs' folder.
By the end of this exercise, you'll be writing tests for the functions yourself.
*/

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator(upperBound) {
  let winner = randomInteger(upperBound);
  let guesses = 0;
  function reset() {
    winner = randomInteger(upperBound)
    guesses = 0;
  }
  function giveUp() {
    let result = winner;
    reset();
    return result;
  }
  function guess(num) {
    guesses++;
    if (num === winner) return true;
    else return false;
  }
  function numGuesses(){
    return guesses;
  }
  return {reset, giveUp, guess, numGuesses};
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
