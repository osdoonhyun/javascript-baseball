const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./UI/OutputView');
const InputView = require('./UI/InputView');
const BaseballGame = require('./domain/BaseballGame');
const MakeRandomNumber = require('./utils/MakeRandomNumber');
const getStrikeCount = require('./utils/getStrikeCount');
const getBallCount = require('./utils/getBallCount');
const Validation = require('./utils/Validation');
const { MESSAGE, INPUT } = require('./constants/constants');

class App {
  #myGame;

  play() {
    OutputView.gameStart();
    return this.gameSetting();
  }

  gameSetting() {
    this.#myGame = new BaseballGame(MakeRandomNumber());
    return this.inputMyAnswer();
  }

  inputMyAnswer() {
    InputView.inputUserAnswer((userInput) => {
      Validation.validateUserInput(userInput);

      return this.getResult(userInput);
    });
  }

  getResult(myInput) {
    const { strike, ball } = this.#myGame.getResult(
      myInput,
      getStrikeCount,
      getBallCount
    );
    OutputView.showGameResult(strike, ball);
    if (this.#myGame.isFinishedGame(myInput)) return this.retryCheck();
    return this.inputMyAnswer();
  }

  retryCheck() {
    OutputView.endGame();
    InputView.inputRetryOrQuit((input) => {
      if (input === INPUT.RETRY) return this.gameSetting();
      if (input === INPUT.QUIT) return this.quitGame();
      return this.throwError();
    });
  }

  quitGame() {
    Console.close();
  }

  throwError() {
    throw new Error(MESSAGE.INPUT_ERROR);
  }
}

const app = new App();
app.play();

module.exports = App;
