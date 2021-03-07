import generateRandomNumber from './util.mjs';

let correctAnswer = 0;

const removeElemProgression = (progression) => {
  const removedIndex = Math.floor(Math.random() * 10);
  return progression.map((progElem, i) => {
    if (i === removedIndex) {
      return '..';
    }
    return progElem;
  });
};

const generateProgression = () => {
  const startProg = generateRandomNumber();
  const numberProg = Math.floor(Math.random() * 10);
  return Array.from({ length: 10 })
    .reduce((acc, _, index) => {
      acc.push(startProg + (index * numberProg));
      return acc;
    }, []);
};

const calculateEmptyOfProgression = (progression) => {
  const fullNumber = progression.filter((elem) => elem !== '..');
  const numberProg = fullNumber.reduce((acc, currentNumber, i) => {
    if (fullNumber[i + 1]) {
      return parseInt(fullNumber[i + 1], 10) - parseInt(currentNumber, 10);
    }
    return acc;
  }, 0);
  return progression.map((elem, i) => {
    if (elem === '..') {
      return parseInt(progression[i - 1], 10) + parseInt(numberProg, 10);
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

export default { generateGame, checkAnswer, rightAnswer };
