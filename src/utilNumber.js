const generateRandomNumber = () => Math.floor(Math.random() * 100);

const generateRandomMathOperator = () => {
  const mathOperator = ['+', '-', '*'];
  const operator = Math.floor(Math.random() * 3);
  return mathOperator[operator];
};

const calculateNumber = (operator, first, second) => {
  const firstInt = parseInt(first, 10);
  const secondInt = parseInt(second, 10);
  if (operator === '+') {
    return firstInt + secondInt;
  }
  if (operator === '-') {
    return firstInt - secondInt;
  }
  if (operator === '*') {
    return firstInt * secondInt;
  }
  return 0;
};

const isEvenNumber = (number) => number % 2 === 0;

module.exports = {
  generateRandomNumber, isEvenNumber, generateRandomMathOperator, calculateNumber,
};
