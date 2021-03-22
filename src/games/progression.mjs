import { generateRandomNumber } from '../util.mjs';

const rule = 'What number is missing in the progression?';

const hideElement = (progression, removedIndex) => progression
  .map((progElem, i) => (i === removedIndex ? '..' : progElem));

const generateProgression = (startProg, numberProg, randomLength) => Array
  .from({ length: randomLength }).map((_, index) => startProg + (index * numberProg));

const generateRound = () => {
  const start = generateRandomNumber(0, 99);
  const step = generateRandomNumber(0, 10);
  const length = generateRandomNumber(5, 10);
  const removedIndex = generateRandomNumber(0, length - 1);
  const progression = generateProgression(start, step, length);
  const progressionWithEmpty = hideElement(progression, removedIndex);
  const rightAnswer = String(progression[removedIndex]);
  const question = progressionWithEmpty.join(' ');
  return {
    question,
    rightAnswer,
  };
};

export default {
  generateRound, rule,
};
