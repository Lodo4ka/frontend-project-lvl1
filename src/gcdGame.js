const { generateRandomNumber, nearDivider } = require('./utilNumber');

let countRightAnswer = 0;
let correctAnswer = 0;

const generateCalculation = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  return `${firstNumber} ${secondNumber}`;
};

const rightAnswer = (answer) => answer !== correctAnswer && correctAnswer;

const checkAnswer = (expression, answer) => {
  const [firstNumber, secondNumber] = expression.split(' ');
  correctAnswer = nearDivider(firstNumber, secondNumber);
  if (correctAnswer === parseInt(answer, 10)) {
    countRightAnswer += 1;
    return countRightAnswer === 3 ? 'win' : 'right';
  }
  return 'loose';
};

module.exports = { generateCalculation, checkAnswer, rightAnswer };
