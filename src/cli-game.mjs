import playGame from './play-game.mjs';
import calcGame from './calc-game.mjs';
import evenNumberGame from './even-number-game.mjs';
import gcdGame from './gcd-game.mjs';
import primeGame from './prime-game.mjs';
import progressionGame from './progression-game.mjs';

const dictGames = {
  even: evenNumberGame,
  gcd: gcdGame,
  prime: primeGame,
  progression: progressionGame,
  calc: calcGame,
};

export default (nameOfGame) => {
  playGame(dictGames[nameOfGame]);
};
