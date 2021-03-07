import playGame from './play-game.mjs';
import calcGame from './calc-game.mjs';
import evenNumberGame from './even-number-game.mjs';
import gcdGame from './gcd-game.mjs';
import primeGame from './prime-game.mjs';
import progressionGame from './progression-game.mjs';

const dictGames = {
  even: {
    phrase: 'Answer "yes" if the number is even, otherwise answer "no".',
    game: evenNumberGame,
  },
  gcd: {
    phrase: 'Find the greatest common divisor of given numbers.',
    game: gcdGame,
  },
  prime: {
    phrase: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    game: primeGame,
  },
  progression: {
    phrase: 'What number is missing in the progression?',
    game: progressionGame,
  },
  calc: {
    phrase: 'What is the result of the expression?',
    game: calcGame,
  },
};

export default (nameOfGame) => {
  playGame(dictGames[nameOfGame].phrase, dictGames[nameOfGame].game);
};
