class BaseballGame {
  #answerNumber;

  constructor(input) {
    this.#answerNumber = input;
  }

  getResult(input, getStrikeCount, getBallCount) {
    const strikeCount = getStrikeCount(this.#answerNumber, input);
    const ballCount = getBallCount(this.#answerNumber, input);

    return { strike: strikeCount, ball: ballCount };
  }

  isFinishedGame(input) {
    if (input === this.#answerNumber) return true;
    return false;
  }
}

module.exports = BaseballGame;
