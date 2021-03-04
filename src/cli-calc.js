const readlineSync = require('readline-sync');
const entryGame = require('./entryGame');
const calcGame = require('./calcGame');

module.exports = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('What is the result of the expression?');
  entryGame(name, calcGame);
};
