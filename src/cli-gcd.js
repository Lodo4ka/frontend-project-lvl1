const readlineSync = require('readline-sync');
const guessNumber = require('./guessNumber');
const gcdGame = require('./gcdGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  guessNumber(name, gcdGame);
};
