import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.rule);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, rightAnswer } = game.generateRound();
    const userAnswer = readlineSync.question(`Question: ${question}\n`);
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
