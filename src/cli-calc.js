const cli = require('./cli');
const entryGame = require('./entryGame');
const calcGame = require('./calcGame');

module.exports = () => {
  const name = cli();
  entryGame(name, 'What is the result of the expression?', calcGame);
};
