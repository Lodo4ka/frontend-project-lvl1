const cli = require('./cli');
const entryGame = require('./entryGame');
const evenNumberGame = require('./evenNumberGame');

module.exports = () => {
  const name = cli();
  entryGame(name,
    'Answer "yes" if the number is even, otherwise answer "no".', evenNumberGame);
};
