import readlineSync from 'readline-sync';

const COUNTS_GAME_ROUND = 3;

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.rule);

  for (let i = 0; i < COUNTS_GAME_ROUND; i += 1) {
    const { round, rightAnswer } = game.generateRound();
    const userAnswer = readlineSync.question(`Question: ${round}\n`);
    console.log(`Your answer: ${userAnswer}!`);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer; Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
