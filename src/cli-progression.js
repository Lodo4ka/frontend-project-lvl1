const cli = require('./cli');
const guessNumber = require('./entryGame');
const progressionGame = require('./progressionGame');

module.exports = () => {
  const name = cli();
  guessNumber(name,
    'What number is missing in the progression?', progressionGame);
};
