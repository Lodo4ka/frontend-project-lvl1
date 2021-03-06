import readlineSync from 'readline-sync';
import playGame from './play-game.mjs';
import progressionGame from './progression-game.mjs';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  playGame(name, progressionGame);
};
