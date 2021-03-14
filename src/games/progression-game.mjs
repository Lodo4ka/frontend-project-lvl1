import { generateRandomNumber } from '../util.mjs';

const textRuleGame = 'What number is missing in the progression?';

const removeElemProgression = (progression, removedIndex) => progression
  .map((progElem, i) => (i === removedIndex ? '..' : progElem));

const generateProgression = (startProg, numberProg, randomLength) => Array
  .from({ length: randomLength }).map((_, index) => startProg + (index * numberProg));

const calculateEmptyOfProgression = (progression, numberProg) => progression
  .reduce((acc, elem, index) => {
    if (elem === '..') {
      if (progression[index - 1]) {
        return acc + parseInt(progression[index - 1], 10) + parseInt(numberProg, 10);
      }
      return acc + parseInt(progression[index + 1], 10) - parseInt(numberProg, 10);
    }
    return acc + 0;
  }, 0);

const generateRoundGame = () => {
  const startProg = generateRandomNumber(0, 99);
  const numberProg = generateRandomNumber(0, 10);
  const randomLength = generateRandomNumber(5, 10);
  const removedIndex = generateRandomNumber(0, randomLength);
  const progression = generateProgression(startProg, numberProg, randomLength);
  const progressionWithEmpty = removeElemProgression(progression, removedIndex);
  const rightAnswer = String(calculateEmptyOfProgression(progression, numberProg));
  return {
    expression: progressionWithEmpty.join(' '),
    rightAnswer,
  };
};

export default {
  generateRoundGame, textRuleGame,
};
