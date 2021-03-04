const readlineSync = require('readline-sync');
const entryGame = require('./entryGame');
const evenNumberGame = require('./evenNumberGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name? ');
  entryGame(name,
    'Answer "yes" if the number is even, otherwise answer "no".', evenNumberGame);
};
