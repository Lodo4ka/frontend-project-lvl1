const readlineSync = require('readline-sync');
const { generateRandomNumber, checkAnswer, oppositeAnswer } = require('./evenNumberCore');

const guessNumber = (name) => {
  const number = generateRandomNumber();
  const answer = readlineSync.question(`Question: ${number}`);
  console.log(`Your answer: ${answer}!`);
  const result = checkAnswer(number, answer);
  if (result === 'loose') {
    console.log(`${answer} is wrong answer; Correct answer was '${oppositeAnswer(answer)}'.`);
    console.log(`Let's try again, ${name}!`);
  } else if (result === 'win') {
    console.log(`Congratulations, ${name}!`);
  } else if (result === 'right') {
    guessNumber(name);
  }
};

module.exports = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  guessNumber(name);
};
