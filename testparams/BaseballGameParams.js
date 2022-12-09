const BaseballGameParams = {
  answerCase: ['123', '456', '456', '789'],
  inputCase: ['125', '654', '123', '789'],

  CountResult: [
    { strike: 2, ball: 0 },
    { strike: 1, ball: 2 },
    { strike: 0, ball: 0 },
    { strike: 3, ball: 0 },
  ],

  finishedResult: [false, false, false, true],
};

module.exports = BaseballGameParams;
