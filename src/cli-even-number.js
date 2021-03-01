const readlineSync = require('readline-sync');
const { generateRandomNumber } = require('./evenNumberCore');

module.exports = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = generateRandomNumber();
  const answer = readlineSync.question(`Question: ${number}`);
  console.log(`Your answer: ${answer}!`);
};
