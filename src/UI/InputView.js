const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/constants');

const InputView = {
  inputUserAnswer(callback) {
    Console.readLine(MESSAGE.GAME_INPUT_NUMBER, callback);
  },

  inputRetryOrQuit(callback) {
    Console.readLine(MESSAGE.GAME_RETRY, callback);
  },
};

module.exports = InputView;
