import { generateRandomNumber, answerYesOrNo } from './util.mjs';

const textRuleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGame = () => generateRandomNumber(0, 99);

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

const getRightAnswer = (expression) => {
  const primeAnswer = isPrime(expression);
  return answerYesOrNo(primeAnswer);
};

const rightAnswer = (answer, correctAnswer) => answer !== correctAnswer && correctAnswer;

export default {
  generateGame, getRightAnswer, rightAnswer, textRuleGame,
};
