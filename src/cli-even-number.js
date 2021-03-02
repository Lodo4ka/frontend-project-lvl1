const readlineSync = require('readline-sync');
const guessNumber = require('./guessNumber');
const evenNumberGame = require('./evenNumberGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  guessNumber(name, evenNumberGame);
};
