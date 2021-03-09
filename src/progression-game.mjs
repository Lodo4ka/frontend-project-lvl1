import { generateRandomNumber } from './util.mjs';

let correctAnswer = 0;
const textRuleGame = 'What number is missing in the progression?';

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
  const numberProg = generateRandomNumber(0, 10);
  return Array.from({ length: 10 })
    .reduce((acc, _, index) => [...acc, startProg + (index * numberProg)], []);
};

const calculateEmptyOfProgression = (progression) => {
  const progressionWithoutEmpty = progression.filter((elem) => elem !== '..');
  const basisProg = progressionWithoutEmpty.reduce((acc, currentNumber, i) => {
    if (progressionWithoutEmpty[i + 1]) {
      return parseInt(progressionWithoutEmpty[i + 1], 10) - parseInt(currentNumber, 10);
    }
    return acc;
  }, 0);
  return progression.map((elem, i) => {
    if (elem === '..') {
      if (progression[i - 1]) {
        return parseInt(progression[i - 1], 10) + parseInt(basisProg, 10);
      }
      return parseInt(progression[i + 1], 10) - parseInt(basisProg, 10);
    }
    return false;
  }).filter(Boolean)[0];
};

const generateGame = () => {
  let progression = generateProgression();
  progression = removeElemProgression(progression);
  return progression.join(' ');
};

const checkAnswer = (expression, answer) => {
  const progression = expression.split(' ');
  correctAnswer = calculateEmptyOfProgression(progression);
  return correctAnswer === parseInt(answer, 10);
};

const rightAnswer = (answer) => answer !== correctAnswer && correctAnswer;

export default {
  generateGame, checkAnswer, rightAnswer, textRuleGame,
};
