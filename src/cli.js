const readlineSync = require('readline-sync');

module.exports = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
};
