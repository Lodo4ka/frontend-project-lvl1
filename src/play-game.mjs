import readlineSync from 'readline-sync';

const playGame = (ruleGame, game) => {
  let countRightAnswer = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(ruleGame);

  do {
    const calculations = game.generateGame();
    const answer = readlineSync.question(`Question: ${calculations}\n`);
    console.log(`Your answer: ${answer}!`);
    const resultAnswer = game.checkAnswer(calculations, answer);
    if (resultAnswer) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      console.log(`${answer} is wrong answer; Correct answer was '${game.rightAnswer(answer)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  while (countRightAnswer < 3);
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
