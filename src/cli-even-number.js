const readlineSync = require('readline-sync');
const entryGame = require('./entryGame');
const evenNumberGame = require('./evenNumberGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  entryGame(name, evenNumberGame);
};
