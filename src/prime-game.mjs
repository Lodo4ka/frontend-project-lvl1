import generateRandomNumber from './util.mjs';

let countRightAnswer = 0;

const generateGame = () => generateRandomNumber();

const isPrime = (number) => {
  if (number < 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

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

export default { generateGame, checkAnswer, rightAnswer };
