import { generateRandomNumber } from '../util.mjs';

const textRuleGame = 'What number is missing in the progression?';

const removeElemProgression = (progression, removedIndex) => progression
  .map((progElem, i) => (i === removedIndex ? '..' : progElem));

const generateProgression = (startProg, numberProg, randomLength) => Array
  .from({ length: randomLength }).map((_, index) => startProg + (index * numberProg));

const generateRoundGame = () => {
  const startProg = generateRandomNumber(0, 99);
  const numberProg = generateRandomNumber(0, 10);
  const randomLength = generateRandomNumber(5, 10);
  const removedIndex = generateRandomNumber(0, randomLength - 1);
  const progression = generateProgression(startProg, numberProg, randomLength);
  const progressionWithEmpty = removeElemProgression(progression, removedIndex);
  const rightAnswer = String(progression[removedIndex]);
  const expression = progressionWithEmpty.join(' ');
  return {
    expression,
    rightAnswer,
  };
};

export default {
  generateRoundGame, textRuleGame,
};
