const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./UI/OutputView');
const InputView = require('./UI/InputView');
const BaseballGame = require('./domain/BaseballGame');
const MakeRandomNumber = require('./utils/MakeRandomNumber');
const getStrikeCount = require('./utils/getStrikeCount');
const getBallCount = require('./utils/getBallCount');
const Validation = require('./utils/Validation');

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
