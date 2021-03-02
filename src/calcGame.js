const { generateRandomNumber, generateRandomMathOperator, calculateNumber } = require('./utilNumber');

let countRightAnswer = 0;
let correctAnswer = 0;

const generateCalculation = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const mathOperator = generateRandomMathOperator();
  return `${firstNumber} ${mathOperator} ${secondNumber}`;
};

const checkAnswer = (expression, answer) => {
  const [firstNumber, mathOperator, secondNumber] = expression.split(' ');
  correctAnswer = calculateNumber(mathOperator, firstNumber, secondNumber);
  if (correctAnswer === parseInt(answer, 10)) {
    countRightAnswer += 1;
    return countRightAnswer === 3 ? 'win' : 'right';
  }
  return 'loose';
};

const rightAnswer = (answer) => answer !== correctAnswer && correctAnswer;

module.exports = { generateCalculation, checkAnswer, rightAnswer };
