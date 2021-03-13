import { generateRandomNumber, answerYesOrNo } from './util.mjs';

const textRuleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const generateGame = () => generateRandomNumber(0, 99);

const rightAnswer = (answer, correctAnswer) => answer !== correctAnswer && correctAnswer;

const getRightAnswer = (expression) => {
  const evenAnswer = isEvenNumber(expression);
  return answerYesOrNo(evenAnswer);
};

export default {
  generateGame, getRightAnswer, rightAnswer, textRuleGame,
};
