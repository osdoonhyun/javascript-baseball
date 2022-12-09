const BaseballGame = require('../src/domain/BaseballGame');
const getStrikeCount = require('../src/utils/getStrikeCount');
const getBallCount = require('../src/utils/getBallCount');
const { CountResult } = require('../testparams/BaseballGameParams');
const BaseballGameParams = require('../testparams/BaseballGameParams');

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
