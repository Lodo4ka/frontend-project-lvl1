import { generateRandomNumber } from './util.mjs';

const textRuleGame = 'What is the result of the expression?';

const generateRandomMathOperator = () => {
  const mathOperator = ['+', '-', '*'];
  const operator = generateRandomNumber(0, mathOperator.length - 1);
  return mathOperator[operator];
};

const calculateNumber = (operator, firstNum, secondNum) => {
  const mathExpressionByOperator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return Object.prototype.hasOwnProperty.call(mathExpressionByOperator, operator)
    ? mathExpressionByOperator[operator](firstNum, secondNum) : null;
};

const generateGame = () => {
  const firstNumber = generateRandomNumber(0, 99);
  const secondNumber = generateRandomNumber(0, 99);
  const mathOperator = generateRandomMathOperator();
  return `${firstNumber} ${mathOperator} ${secondNumber}`;
};

const getRightAnswer = (expression) => {
  const [firstNumber, mathOperator, secondNumber] = expression.split(' ');
  return String(calculateNumber(mathOperator, parseInt(firstNumber, 10),
    parseInt(secondNumber, 10)));
};

const rightAnswer = (answer, correctAnswer) => answer !== correctAnswer && correctAnswer;

export default {
  generateGame, getRightAnswer, rightAnswer, textRuleGame,
};
