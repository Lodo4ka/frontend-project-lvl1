const { generateProgression, removeElemProgression, calculateEmptyOfProgression } = require('./util');

let countRightAnswer = 0;
let correctAnswer = 0;

const generateGame = () => {
  let progression = generateProgression();
  progression = removeElemProgression(progression);
  return progression.join(' ');
};

const checkAnswer = (expression, answer) => {
  const progression = expression.split(' ');
  correctAnswer = calculateEmptyOfProgression(progression);
  if (correctAnswer === parseInt(answer, 10)) {
    countRightAnswer += 1;
    return countRightAnswer === 3 ? 'win' : 'right';
  }
  return 'loose';
};

const rightAnswer = (answer) => answer !== correctAnswer && correctAnswer;

module.exports = { generateGame, checkAnswer, rightAnswer };
