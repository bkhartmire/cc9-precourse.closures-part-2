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
  return {
    reset: () => {
      winner = randomInteger(upperBound)
      guesses = 0;
    }, 
    giveUp: () => {
      let result = winner;
      winner = randomInteger(upperBound)
      guesses = 0;
      return result;
    },
    guess: (num) => {
      guesses++;
      if (num === winner) return true;
      else return false;
    },
    numberGuesses: () => {return guesses;}
  };
}

function accountGenerator(initial) {
  let balance = initial;
  let withdrawalsCount = 0;
  let depositsCount = 0;

  return {
    withdraw: function(amount) {
      let status;
      let balanceBefore = balance;
      if (balance - amount >= 0) {
        balance = balance - amount;
        status = "approved";
        withdrawalsCount++;
      } else {status = "denied";}
      return {
        type: "withdrawal",
        amount: amount,
        before: balanceBefore,
        after: balance,
        status: status,
        time: new Date(Date.now())
      }
    },
    deposit: function(amount) {
      let balanceBefore = balance;
      balance = balance + amount;
      depositsCount++;
      return {
        type: "deposit",
        amount: amount,
        before: balanceBefore,
        after: balance,
        status: "approved",
        time: new Date(Date.now())
      };
    },
    getBalance: function() {
      return balance;
    },
    transactionHistory(num) {
      //dummy code
      return num
    }

  };
}
