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
  const question = generateRandomNumber(0, 99);
  const primeAnswer = isPrime(question);
  const rightAnswer = answerYesOrNo(primeAnswer);
  return {
    question,
    rightAnswer,
  };
};

export default {
  generateRound, rule,
};
