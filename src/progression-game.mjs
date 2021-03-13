import { generateRandomNumber } from './util.mjs';

const textRuleGame = 'What number is missing in the progression?';

const removeElemProgression = (progressionData) => {
  const removedIndex = generateRandomNumber(0, progressionData.randomLength);
  return progressionData.progression.map((progElem, i) => {
    if (i === removedIndex) {
      return '..';
    }
    return progElem;
  });
};

const generateProgression = () => {
  const startProg = generateRandomNumber(0, 99);
  const numberProg = generateRandomNumber(0, 10);
  const randomLength = generateRandomNumber(5, 10);
  const progression = Array.from({ length: randomLength })
    .map((_, index) => startProg + (index * numberProg));
  return {
    progression, randomLength,
  };
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
  const progressionData = generateProgression();
  const progression = removeElemProgression(progressionData);
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
