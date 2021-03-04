const cli = require('./cli');
const entryGame = require('./entryGame');
const gcdGame = require('./gcdGame');

module.exports = () => {
  const name = cli();
  entryGame(name, 'Find the greatest common divisor of given numbers.', gcdGame);
};
