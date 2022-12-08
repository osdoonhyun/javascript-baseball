const { Random } = require('@woowacourse/mission-utils');

const MakeRandomNumber = () => {
  const set = new Set();
  while (set.size < 3) {
    set.add(Random.pickNumberInRange(1, 9));
  }
  return [...set].join('');
};

module.exports = MakeRandomNumber;
