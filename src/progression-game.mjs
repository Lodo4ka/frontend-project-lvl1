import { generateRandomNumber } from './util.mjs';

const textRuleGame = 'What number is missing in the progression?';
let randomLength = 0;

const removeElemProgression = (progression) => {
  const removedIndex = generateRandomNumber(0, randomLength);
  return progression.map((progElem, i) => {
    if (i === removedIndex) {
      return '..';
    }
    return progElem;
  });
};

const generateProgression = () => {
  const startProg = generateRandomNumber(0, 99);
  const numberProg = generateRandomNumber(0, 10);
  randomLength = generateRandomNumber(5, 10);
  return Array.from({ length: randomLength })
    .map((_, index) => startProg + (index * numberProg));
};

const calculateEmptyOfProgression = (progression) => {
  const numberProg = progression.reduce((acc, el, index) => {
    if (el === '..') {
      if (progression[index - 1] && progression[index - 2]) {
        return acc + parseInt(progression[index - 1], 10) - parseInt(progression[index - 2], 10);
      }
      return acc + parseInt(progression[index + 2], 10) - parseInt(progression[index + 1], 10);
    }
    return acc;
  }, 0);
  return progression.reduce((acc, elem, index) => {
    if (elem === '..') {
      if (progression[index - 1]) {
        return acc + parseInt(progression[index - 1], 10) + parseInt(numberProg, 10);
      }
      return acc + parseInt(progression[index + 1], 10) - parseInt(numberProg, 10);
    }
    return acc + 0;
  }, 0);
};

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
