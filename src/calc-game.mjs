import generateRandomNumber from './util.mjs';

let correctAnswer = 0;
const textRuleGame = 'What is the result of the expression?';

const generateRandomMathOperator = () => {
  const mathOperator = ['+', '-', '*'];
  const operator = generateRandomNumber(0, mathOperator.length - 1);
  return mathOperator[operator];
};

const calculateNumber = (operator, first, second) => {
  if (operator === '+') {
    return first + second;
  }
  if (operator === '-') {
    return first - second;
  }
  if (operator === '*') {
    return first * second;
  }
  return 0;
};

const generateGame = () => {
  const firstNumber = generateRandomNumber(0, 99);
  const secondNumber = generateRandomNumber(0, 99);
  const mathOperator = generateRandomMathOperator();
  return `${firstNumber} ${mathOperator} ${secondNumber}`;
};

const checkAnswer = (expression, answer) => {
  const [firstNumber, mathOperator, secondNumber] = expression.split(' ');
  correctAnswer = calculateNumber(mathOperator, parseInt(firstNumber, 10),
    parseInt(secondNumber, 10));
  return correctAnswer === parseInt(answer, 10);
};

const rightAnswer = (answer) => answer !== correctAnswer && correctAnswer;

export default {
  generateGame, checkAnswer, rightAnswer, textRuleGame,
};
