import { generateRandomNumber, answerYesOrNo } from '../util.mjs';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(0, 99);
  const evenAnswer = isEven(question);
  const rightAnswer = answerYesOrNo(evenAnswer);
  return {
    question,
    rightAnswer,
  };
};

export default {
  generateRound, rule,
};
