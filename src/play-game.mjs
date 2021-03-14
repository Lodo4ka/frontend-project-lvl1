import readlineSync from 'readline-sync';

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.textRuleGame);

  for (let i = 0; i < 3; i += 1) {
    const calculations = game.generateRoundGame();
    const userAnswer = readlineSync.question(`Question: ${calculations}\n`);
    console.log(`Your answer: ${userAnswer}!`);
    const correctAnswer = game.getRightAnswer(calculations);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer; Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
