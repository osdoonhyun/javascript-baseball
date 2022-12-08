const { Random } = require('@woowacourse/mission-utils');

const MakeRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 9, 3);
};

module.exports = MakeRandomNumber;
