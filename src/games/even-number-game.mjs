import { generateRandomNumber, answerYesOrNo } from '../util.mjs';

const textRuleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const generateRoundGame = () => generateRandomNumber(0, 99);

const getRightAnswer = (expression) => {
  const evenAnswer = isEvenNumber(expression);
  return answerYesOrNo(evenAnswer);
};

export default {
  generateRoundGame, getRightAnswer, textRuleGame,
};
