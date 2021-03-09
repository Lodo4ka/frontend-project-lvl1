import generateRandomNumber from './util.mjs';

const textRuleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const generateGame = () => generateRandomNumber(0, 99);

const rightAnswer = (answer) => {
  if (answer === 'yes') return 'no';
  return 'yes';
};

const checkAnswer = (expression, answer) => (isEvenNumber(expression) && answer === 'yes') || (!isEvenNumber(expression) && answer === 'no');

export default {
  generateGame, checkAnswer, rightAnswer, textRuleGame,
};
