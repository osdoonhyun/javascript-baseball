const UtilTestCase = require('../testparams/UtilTestCase');
const getStrikeCount = require('../src/utils/getStrikeCount');
const getBallCount = require('../src/utils/getBallCount');

describe('유틸함수 테스트', () => {
  test.each(
    UtilTestCase.strikeCountTestCase.map((data, index) => {
      return [data, index];
    })
  )('스트라이크 갯수 유틸 함수', (data, index) => {
    expect(getStrikeCount(data[0], data[1])).toBe(
      UtilTestCase.strikeTestResult[index]
    );
  });

  test.each(
    UtilTestCase.ballCountTestCase.map((data, index) => {
      return [data, index];
    })
  )('볼 갯수 유틸 함수', (data, index) => {
    expect(getBallCount(data[0], data[1])).toBe(
      UtilTestCase.ballTestResult[index]
    );
  });
});
