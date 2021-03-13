import { generateRandomNumber } from './util.mjs';

const textRuleGame = 'What number is missing in the progression?';
let numberProg = 0;

const removeElemProgression = (progression) => {
  const removedIndex = generateRandomNumber(0, 9);
  return progression.map((progElem, i) => {
    if (i === removedIndex) {
      return '..';
    }
    return progElem;
  });
};

const generateProgression = () => {
  const startProg = generateRandomNumber(0, 99);
  numberProg = generateRandomNumber(0, 10);
  return Array.from({ length: 10 })
    .map((_, index) => index * startProg);
};

const calculateEmptyOfProgression = (progression) => progression.map((elem, i) => {
  if (elem === '..') {
    if (progression[i - 1]) {
      return parseInt(progression[i - 1], 10) + parseInt(numberProg, 10);
    }
    return parseInt(progression[i + 1], 10) - parseInt(numberProg, 10);
  }
  return false;
}).filter(Boolean)[0];

const generateGame = () => {
  let progression = generateProgression();
  progression = removeElemProgression(progression);
  return progression.join(' ');
};

const getRightAnswer = (expression) => {
  const progression = expression.split(' ');
  return String(calculateEmptyOfProgression(progression));
};

const rightAnswer = (answer, correctAnswer) => answer !== correctAnswer && correctAnswer;

export default {
  generateGame, getRightAnswer, rightAnswer, textRuleGame,
};
