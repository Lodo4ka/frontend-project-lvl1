const readlineSync = require('readline-sync');
const entryGame = require('./entryGame');
const calcGame = require('./calcGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name? ');
  entryGame(name, 'What is the result of the expression?', calcGame);
};
