import { generateRandomNumber, isEvenNumber } from './util.mjs';

let countRightAnswer = 0;

const generateGame = () => generateRandomNumber();

const rightAnswer = (answer) => {
  if (answer === 'yes') return 'no';
  return 'yes';
};

const checkAnswer = (expression, answer) => {
  if ((isEvenNumber(expression) && answer === 'yes') || (!isEvenNumber(expression) && answer === 'no')) {
    countRightAnswer += 1;
    return countRightAnswer === 3 ? 'win' : 'right';
  }
  return 'loose';
};

export default { generateGame, checkAnswer, rightAnswer };
