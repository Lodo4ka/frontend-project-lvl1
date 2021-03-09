import generateRandomNumber from './util.mjs';

let correctAnswer = 0;

const generateRandomMathOperator = () => {
  const mathOperator = ['+', '-', '*'];
  const operator = generateRandomNumber(0, 3);
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

const generateGame = () => {
  const firstNumber = generateRandomNumber(0, 99);
  const secondNumber = generateRandomNumber(0, 99);
  const mathOperator = generateRandomMathOperator();
  return `${firstNumber} ${mathOperator} ${secondNumber}`;
};

const checkAnswer = (expression, answer) => {
  const [firstNumber, mathOperator, secondNumber] = expression.split(' ');
  correctAnswer = calculateNumber(mathOperator, firstNumber, secondNumber);
  return correctAnswer === parseInt(answer, 10);
};

const rightAnswer = (answer) => answer !== correctAnswer && correctAnswer;

export default { generateGame, checkAnswer, rightAnswer };
