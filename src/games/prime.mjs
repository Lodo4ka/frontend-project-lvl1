import { generateRandomNumber, answerYesOrNo } from '../util.mjs';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const round = generateRandomNumber(0, 99);
  const primeAnswer = isPrime(round);
  const rightAnswer = answerYesOrNo(primeAnswer);
  return {
    round,
    rightAnswer,
  };
};

export default {
  generateRound, rule,
};
