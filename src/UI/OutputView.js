const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, COUNT } = require('../constants/constants');

const OutputView = {
  gameStart() {
    Console.print(MESSAGE.GAME_START);
  },

  showGameResult(strike, ball) {
    if (ball > 0 && strike > 0)
      return Console.print(`${ball}볼 ${strike}스트라이크`);
    if (ball > 0) return Console.print(`${ball}볼`);
    if (strike > 0) return Console.print(`${strike}스트라이크`);
    if (ball === 0 && strike === 0) return Console.print(COUNT.NOTHING);
  },

  endGame() {
    Console.print(MESSAGE.GAME_END);
  },
};

module.exports = OutputView;
