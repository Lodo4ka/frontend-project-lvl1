const readlineSync = require('readline-sync');
const entryGame = require('./entryGame');
const primeGame = require('./primeGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  entryGame(name, primeGame);
};
