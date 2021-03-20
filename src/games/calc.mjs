import { generateRandomNumber } from '../util.mjs';

const rule = 'What is the result of the round?';

const calculateNumber = (operator, firstNum, secondNum) => {
  const mathroundByOperator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return mathroundByOperator[operator]
    ? mathroundByOperator[operator](firstNum, secondNum) : null;
};

const getRandomMathOperator = () => {
  const mathOperators = ['+', '-', '*'];
  const operator = generateRandomNumber(0, mathOperators.length - 1);
  return mathOperators[operator];
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(0, 99);
  const secondNumber = generateRandomNumber(0, 99);
  const mathOperator = getRandomMathOperator();
  const round = `${firstNumber} ${mathOperator} ${secondNumber}`;
  const rightAnswer = String(calculateNumber(mathOperator,
    parseInt(firstNumber, 10),
    parseInt(secondNumber, 10)));
  return {
    round,
    rightAnswer,
  };
};

export default {
  generateRound, rule,
};
