import { generateRandomNumber, answerYesOrNo } from '../util.mjs';

const textRuleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const generateRoundGame = () => {
  const expression = generateRandomNumber(0, 99);
  const evenAnswer = isEvenNumber(expression);
  const rightAnswer = answerYesOrNo(evenAnswer);
  return {
    expression,
    rightAnswer,
  };
};

export default {
  generateRoundGame, textRuleGame,
};
