import { generateRandomNumber } from '../util.mjs';

const rule = 'What is the result of the question?';

const calculateNumber = (operator, firstNum, secondNum) => {
  const mathExpressions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return mathExpressions[operator]
    ? mathExpressions[operator](firstNum, secondNum) : null;
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
  const question = `${firstNumber} ${mathOperator} ${secondNumber}`;
  const rightAnswer = String(calculateNumber(mathOperator,
    parseInt(firstNumber, 10),
    parseInt(secondNumber, 10)));
  return {
    question,
    rightAnswer,
  };
};

export default {
  generateRound, rule,
};
