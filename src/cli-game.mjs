import playGame from './play-game.mjs';
import calcGame from './games/calc-game.mjs';
import evenNumberGame from './games/even-number-game.mjs';
import gcdGame from './games/gcd-game.mjs';
import primeGame from './games/prime-game.mjs';
import progressionGame from './games/progression-game.mjs';

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
