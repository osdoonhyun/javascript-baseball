const Validation = {
  validateUserInput(input) {
    const userInputArray = input.split("");

    if (Validation.hasDuplicatedNumber(userInputArray))
      throw new Error("[Error] 중복된 값이 있습니다.");
    if (!Validation.isValidLength(userInputArray))
      throw new Error("[Error] 3개의 숫자를 입력해야 합니다.");
    if (!Validation.isValidNumber(input))
      throw new Error("[Error] 숫자를 입력해야 합니다.");
    if (!Validation.isValidRange(userInputArray))
      throw new Error("[Error] 숫자는 1부터 9까지의 수여야 합니다.");
  },

  hasDuplicatedNumber(inputArray) {
    const inputSet = new Set(inputArray);
    return inputSet.size !== inputArray.length;
  },

  isValidLength(inputArray) {
    return inputArray.length === 3;
  },

  isValidNumber(input) {
    const check = /^[1-9]+$/;
    return check.test(input);
  },

  isValidRange(inputArray) {
    const isValidRangeNumber = (number) => 1 <= number && number <= 9;
    return inputArray.every(isValidRangeNumber);
  },
};

module.exports = Validation;
