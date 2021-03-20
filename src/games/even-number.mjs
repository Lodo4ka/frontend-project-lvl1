import { generateRandomNumber, answerYesOrNo } from '../util.mjs';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const generateRound = () => {
  const round = generateRandomNumber(0, 99);
  const evenAnswer = isEvenNumber(round);
  const rightAnswer = answerYesOrNo(evenAnswer);
  return {
    round,
    rightAnswer,
  };
};

export default {
  generateRound, rule,
};
