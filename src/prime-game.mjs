import generateRandomNumber from './util.mjs';

const generateGame = () => generateRandomNumber(0, 99);

const isPrime = (number) => {
  if (number < 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const checkAnswer = (expression, answer) => (isPrime(expression) && answer === 'yes')
    || (!isPrime(expression) && answer === 'no');

const rightAnswer = (answer) => {
  if (answer === 'yes') return 'no';
  return 'yes';
};

export default { generateGame, checkAnswer, rightAnswer };
