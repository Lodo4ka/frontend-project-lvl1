import generateRandomNumber from './util.mjs';

let countRightAnswer = 0;
let correctAnswer = 0;

const nearDivider = (num1, num2) => {
  const maxNumber = Math.max(num1, num2);
  const calculateDivider = (max) => {
    if (num1 % max === 0 && num2 % max === 0) {
      return max;
    }
    return calculateDivider(max - 1);
  };
  return calculateDivider(maxNumber);
};

const generateGame = () => {
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

export default { generateGame, checkAnswer, rightAnswer };
