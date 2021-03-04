const readlineSync = require('readline-sync');
const guessNumber = require('./entryGame');
const progressionGame = require('./progressionGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name? ');
  guessNumber(name,
    'What number is missing in the progression?', progressionGame);
};
