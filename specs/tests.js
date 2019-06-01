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
    expect(game.numGuesses()).toBe(3);
  });
  it("should reset the number of the guesses", () => {
    const game = gameGenerator(0);
    game.guess(5);
    game.guess(3);
    game.guess(2);
    expect(game.numGuesses()).toBe(3);
    game.reset();
    expect(game.numGuesses()).toBe(0);
  })
});

describe("accountGenerator", () => {
  it("should be there", () => {
    expect(accountGenerator).toBeDefined();
    expect(typeof accountGenerator).toBe("function");
  });

  it("should have some tests", () => {
    expect(false).toBeTruthy();
  });
});
