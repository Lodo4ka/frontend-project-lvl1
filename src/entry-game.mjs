import readlineSync from "readline-sync";

const entryGame = (name, game) => {
  const calculations = game.generateGame();
  const answer = readlineSync.question(`Question: ${calculations}\n`);
  console.log(`Your answer: ${answer}!`);
  const result = game.checkAnswer(calculations, answer);
  if (result === 'loose') {
    console.log(`${answer} is wrong answer; Correct answer was '${game.rightAnswer(answer)}'.`);
    console.log(`Let's try again, ${name}!`);
  } else if (result === 'win') {
    console.log(`Congratulations, ${name}!`);
  } else if (result === 'right') {
    console.log('Correct!');
    entryGame(name, game);
  }
};

export default entryGame;
