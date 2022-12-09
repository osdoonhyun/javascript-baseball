const MESSAGE = {
  INPUT_ERROR: '[ERROR] 잘못된 값을 입력하셨습니다. 게임이 종료됩니다.',
  GAME_START: '숫자 야구 게임을 시작합니다.',
  GAME_INPUT_NUMBER: '숫자를 입력해주세요 : ',
  GAME_RETRY: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  GAME_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
};

const COUNT = {
  STRIKE_COUNT: (count) => `${count}스트라이크`,
  BALL_COUNT: (count) => `${count}볼`,
  NOTHING: '낫싱',
};

const INPUT = {
  RETRY: '1',
  QUIT: '2',
};

module.exports = { MESSAGE, INPUT, COUNT };
