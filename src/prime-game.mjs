import { generateRandomNumber, answerYesOrNo } from './util.mjs';

let correctAnswer = '';
const textRuleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGame = () => generateRandomNumber(0, 99);

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const checkAnswer = (expression, answer) => {
  const primeAnswer = isPrime(expression);
  correctAnswer = answerYesOrNo(primeAnswer);
  return correctAnswer === answer;
};

const rightAnswer = (answer) => answer !== correctAnswer && correctAnswer;

export default {
  generateGame, checkAnswer, rightAnswer, textRuleGame,
};
