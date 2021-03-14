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
  const firstNumber = generateRandomNumber(0, 99);
  const secondNumber = generateRandomNumber(0, 99);
  const mathOperators = ['+', '-', '*'];
  const operator = generateRandomNumber(0, mathOperators.length - 1);
  const mathOperator = mathOperators[operator];
  return `${firstNumber} ${mathOperator} ${secondNumber}`;
};

const getRightAnswer = (expression) => {
  const [firstNumber, mathOperator, secondNumber] = expression.split(' ');
  return String(calculateNumber(mathOperator, parseInt(firstNumber, 10),
    parseInt(secondNumber, 10)));
};

export default {
  generateRoundGame, getRightAnswer, textRuleGame,
};
