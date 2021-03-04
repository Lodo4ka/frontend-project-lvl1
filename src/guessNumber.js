const readlineSync = require('readline-sync');

const guessNumber = (name, game) => {
  const calculations = game.generateCalculation();
  const answer = readlineSync.question(`Question: ${calculations}`);
  console.log(`Your answer: ${answer}!`);
  const result = game.checkAnswer(calculations, answer);
  if (result === 'loose') {
    console.log(`${answer} is wrong answer; Correct answer was '${game.rightAnswer(answer)}'.`);
    console.log(`Let's try again, ${name}!`);
  } else if (result === 'win') {
    console.log(`Congratulations, ${name}!`);
  } else if (result === 'right') {
    console.log('Correct!');
    guessNumber(name, game);
  }
};

module.exports = guessNumber;
