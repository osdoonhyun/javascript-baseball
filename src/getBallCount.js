const getBallCount = (answer, input) => {
  let ballCount = 0;
  answer.split('').forEach((value, index) => {
    if (input.includes(value) && value !== input[index]) ballCount += 1;
  });
  return ballCount;
};

module.exports = getBallCount;
