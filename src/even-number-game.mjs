import { generateRandomNumber, answerYesOrNo } from './util.mjs';

let correctAnswer = '';
const textRuleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const generateGame = () => generateRandomNumber(0, 99);

const rightAnswer = (answer) => answer !== correctAnswer && correctAnswer;

const checkAnswer = (expression, answer) => {
  const evenAnswer = isEvenNumber(expression);
  correctAnswer = answerYesOrNo(evenAnswer);
  return correctAnswer === answer;
};

export default {
  generateGame, checkAnswer, rightAnswer, textRuleGame,
};
