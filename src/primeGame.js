const { generateRandomNumber, isPrime } = require('./util');

let countRightAnswer = 0;

const generateGame = () => generateRandomNumber();

const checkAnswer = (expression, answer) => {
  if ((isPrime(expression) && answer === 'yes')
    || (!isPrime(expression) && answer === 'no')) {
    countRightAnswer += 1;
    return countRightAnswer === 3 ? 'win' : 'right';
  }
  return 'loose';
};

const rightAnswer = (answer) => {
  if (answer === 'yes') return 'no';
  return 'yes';
};

module.exports = { generateGame, checkAnswer, rightAnswer };
