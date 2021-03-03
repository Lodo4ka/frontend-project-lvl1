const { generateRandomNumber, isEvenNumber } = require('./utilNumber');

let countRightAnswer = 0;

const generateCalculation = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  return `${firstNumber} ${secondNumber}`;
};

const rightAnswer = (answer) => {
  if (answer === 'yes') return 'no';
  return 'yes';
};

const checkAnswer = (expression, answer) => {
  if ((isEvenNumber(expression) && answer === 'yes') || (!isEvenNumber(expression) && answer === 'no')) {
    countRightAnswer += 1;
    return countRightAnswer === 3 ? 'win' : 'right';
  }
  return 'loose';
};

module.exports = { generateCalculation, checkAnswer, rightAnswer };
