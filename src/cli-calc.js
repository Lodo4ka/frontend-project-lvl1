const readlineSync = require('readline-sync');
const guessNumber = require('./guessNumber');
const calcGame = require('./calcGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello ${name}!`);
  console.log('What is the result of the expression?');
  guessNumber(name, calcGame);
};
