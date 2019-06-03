describe("gameGenerator", () => {
  it("should be there", () => {
    expect(gameGenerator).toBeDefined();
    expect(typeof gameGenerator).toBe("function");
  });

  it("should generate some games!", () => {
    const game = gameGenerator(4);
    expect(typeof game).toBe("object");
  });

  it("should have just one winning number", () => {
    const bound = 4;
    const game = gameGenerator(bound);
    const number = [];
    for (let i = 0; i < bound; i++) {
      if (game.guess(i)) {
        number.push(i);
      }
    }
    expect(number.length).toBe(1);
  });

  it("should have a reset method", () => {
    // How do you test for this?
    const game = gameGenerator(4);
    expect(typeof game.reset === "function").toBeTruthy();
  });

  it("should return true or false depending on your guess", () => {
    const game = gameGenerator(0);
    expect(game.guess(5)).toBe(false);
    expect(game.guess(1)).toBe(false);
    expect(game.guess(3)).toBe(false);
    expect(game.guess(0)).toEqual(true);
  });

  it("should be able to return the number of guesses", () => {
    const game = gameGenerator(0);
    game.guess(5);
    game.guess(3);
    game.guess(2);
    expect(game.numberGuesses()).toBe(3);
  });
  it("should reset the number of the guesses", () => {
    const game = gameGenerator(0);
    game.guess(5);
    game.guess(3);
    game.guess(2);
    expect(game.numberGuesses()).toBe(3);
    game.reset();
    expect(game.numberGuesses()).toBe(0);
  });
  it("should have a giveUp method that returns the answer and resets the game", () => {
    const game = gameGenerator(0);
    game.guess(5);
    game.guess(3);
    expect(game.numberGuesses()).toBe(2);
    const result = game.giveUp();
    expect(game.numberGuesses()).toBe(0);
    expect(result).toEqual(0);
  })
});

describe("accountGenerator", () => {
  it("should be there", () => {
    expect(accountGenerator).toBeDefined();
    expect(typeof accountGenerator).toBe("function");
  });

  it("should have a withdraw method that returns an object", () => {
    const account = accountGenerator(100);
    expect(typeof account.withdraw === "function").toBeTruthy();
    const expectedResult = {
      type: "withdrawal",
      amount: 50,
      before: 100,
      after: 50,
      status: "approved",
      time: new Date(Date.now())
    };
    expect(account.withdraw(50)).toEqual(expectedResult);
  });
  it("should deny withdrawals that exceed current balance", () => {
    const account = accountGenerator(50);
    const expectedResult = {
      type: "withdrawal",
      amount: 100,
      before: 50,
      after: 50, 
      status: "denied",
      time: new Date(Date.now())
    };
    expect(account.withdraw(100)).toEqual(expectedResult);
  });
  it("should have a deposit method that returns an object", () => {
    const account = accountGenerator(100);
    expect(typeof account.deposit === "function").toBeTruthy();
    const expectedResult = {
      type: "deposit",
      amount: 50,
      before: 100,
      after: 150,
      status: "approved",
      time: new Date(Date.now())
    };
    expect(account.deposit(50)).toEqual(expectedResult);
  })
  it("should have a getBalance method that returns the current balance", () => {
    const account = accountGenerator(100);
    expect(account.getBalance()).toEqual(100);
    account.withdraw(50);
    expect(account.getBalance()).toEqual(50);
    account.withdraw(100);
    expect(account.getBalance()).toEqual(50);
    account.deposit(100);
    expect(account.getBalance()).toEqual(150);
  })
});
