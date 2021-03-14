import { generateRandomNumber } from '../util.mjs';

const textRuleGame = 'What is the result of the expression?';

const calculateNumber = (operator, firstNum, secondNum) => {
  const mathExpressionByOperator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return Object.prototype.hasOwnProperty.call(mathExpressionByOperator, operator)
    ? mathExpressionByOperator[operator](firstNum, secondNum) : null;
};

const generateRoundGame = () => {
  const mathOperators = ['+', '-', '*'];
  const firstNumber = generateRandomNumber(0, 99);
  const secondNumber = generateRandomNumber(0, 99);
  const operator = generateRandomNumber(0, mathOperators.length - 1);
  const mathOperator = mathOperators[operator];
  const rightAnswer = String(calculateNumber(mathOperator,
    parseInt(firstNumber, 10),
    parseInt(secondNumber, 10)));
  return {
    expression: `${firstNumber} ${mathOperator} ${secondNumber}`,
    rightAnswer,
  };
};

export default {
  generateRoundGame, textRuleGame,
};
