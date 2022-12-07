const BaseballGame = require('../src/BaseballGame');
const getBallCount = require('../src/getBallCount');
const getStrikeCount = require('../src/getStrikeCount');
const { CountResult } = require('./BaseballGameParams');
const BaseballGameParams = require('./BaseballGameParams');

describe('BaseballGame 동작 테스트', () => {
  test.each(
    BaseballGameParams.answerCase.map((answer, index) => {
      return [answer, index];
    })
  )('BaseballGame 볼카운트 함수 테스트', (answer, index) => {
    const baseballGame = new BaseballGame(answer);
    expect(
      (() => {
        return baseballGame.getResult(
          BaseballGameParams.inputCase[index],
          getStrikeCount,
          getBallCount
        );
      })()
    ).toStrictEqual(CountResult[index]);
  });

  test.each(
    BaseballGameParams.answerCase.map((answer, index) => {
      return [answer, index];
    })
  )('BaseballGame 비교 결과 함수 테스트', (answer, index) => {
    const baseballGame = new BaseballGame(answer);
    expect(
      (() => {
        return baseballGame.isFinishedGame(BaseballGameParams.inputCase[index]);
      })()
    ).toEqual(BaseballGameParams.finishedResult[index]);
  });
});
