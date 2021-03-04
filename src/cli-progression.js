const readlineSync = require('readline-sync');
const guessNumber = require('./entryGame');
const progressionGame = require('./progressionGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('What number is missing in the progression?');
  guessNumber(name, progressionGame);
};
