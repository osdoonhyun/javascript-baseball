const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BaseballGame = require('./BaseballGame');
const MakeRandomNumber = require('./MakeRandomNumber');
const getStrikeCount = require('./getStrikeCount');
const getBallCount = require('./getBallCount');
const Validation = require('./Validation');

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
      if (input === '1') return this.gameSetting();
      if (input === '2') return this.quitGame();
      return this.throwError();
    });
  }

  quitGame() {
    Console.close();
  }

  throwError() {
    throw new Error('[ERROR] 잘못된 값을 입력하셨습니다. 게임이 종료됩니다.');
  }
}

const app = new App();
app.play();

module.exports = App;
