const Validation = require('../src/utils/Validation');

describe('사용자 입력 값 테스트', () => {
  test('사용자가 유효하지 않은 값 입력시 예외 발생', () => {
    expect(() => {
      Validation.validateUserInput('123455');
    }).toThrow();
  });

  test('사용자 값 중복된 값 입력시 false 출력', () => {
    const result = Validation.isValidLength([1, 2, 3, 3]);

    expect(result).toBe(false);
  });

  test('사용자 값 개수가 3개 이상 입력시 false 출력', () => {
    const result = Validation.isValidLength([1, 2, 3, 4, 5]);

    expect(result).toBe(false);
  });

  test('사용자 값 숫자 값이 아닌 다른 값 입력시 false 출력', () => {
    const result = Validation.isValidNumber('a(!');

    expect(result).toBe(false);
  });

  test('사용자 값 유효한 범위가 아닌 값 입력시 false 출력', () => {
    const result = Validation.isValidRange([0, -1, 12]);

    expect(result).toBe(false);
  });
});
