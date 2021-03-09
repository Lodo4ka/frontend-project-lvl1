import readlineSync from 'readline-sync';

const playGame = (ruleGame, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(ruleGame);

  for (let i = 0; i < 3; i += 1) {
    const calculations = game.generateGame();
    const answer = readlineSync.question(`Question: ${calculations}\n`);
    console.log(`Your answer: ${answer}!`);
    const resultAnswer = game.checkAnswer(calculations, answer);
    if (resultAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer; Correct answer was '${game.rightAnswer(answer)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
