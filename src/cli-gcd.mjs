import readlineSync from 'readline-sync';
import playGame from './play-game.mjs';
import gcdGame from './gcd-game.mjs';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  playGame(name, gcdGame);
};
