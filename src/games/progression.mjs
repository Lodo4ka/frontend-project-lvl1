import { generateRandomNumber } from '../util.mjs';

const rule = 'What number is missing in the progression?';

const hideElement = (progression, removedIndex) => progression
  .map((progElem, i) => (i === removedIndex ? '..' : progElem));

const generateProgression = (startProg, numberProg, randomLength) => Array
  .from({ length: randomLength }).map((_, index) => startProg + (index * numberProg));

const generateRound = () => {
  const startProg = generateRandomNumber(0, 99);
  const numberProg = generateRandomNumber(0, 10);
  const randomLength = generateRandomNumber(5, 10);
  const removedIndex = generateRandomNumber(0, randomLength - 1);
  const progression = generateProgression(startProg, numberProg, randomLength);
  const progressionWithEmpty = hideElement(progression, removedIndex);
  const rightAnswer = String(progression[removedIndex]);
  const round = progressionWithEmpty.join(' ');
  return {
    round,
    rightAnswer,
  };
};

export default {
  generateRound, rule,
};
