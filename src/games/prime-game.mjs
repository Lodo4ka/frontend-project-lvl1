import { generateRandomNumber, answerYesOrNo } from '../util.mjs';

const textRuleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateRoundGame = () => {
  const expression = generateRandomNumber(0, 99);
  const primeAnswer = isPrime(expression);
  const rightAnswer = answerYesOrNo(primeAnswer);
  return {
    expression,
    rightAnswer,
  };
};

export default {
  generateRoundGame, textRuleGame,
};
