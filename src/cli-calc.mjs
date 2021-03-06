import readlineSync from 'readline-sync';
import playGame from './play-game.mjs';
import calcGame from './calc-game.mjs';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  playGame(name, calcGame);
};
