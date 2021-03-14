import readlineSync from 'readline-sync';

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.textRuleGame);

  for (let i = 0; i < 3; i += 1) {
    const { expression, rightAnswer } = game.generateRoundGame();
    const userAnswer = readlineSync.question(`Question: ${expression}\n`);
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
