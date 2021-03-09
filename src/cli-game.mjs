import playGame from './play-game.mjs';
import calcGame from './calc-game.mjs';
import evenNumberGame from './even-number-game.mjs';
import gcdGame from './gcd-game.mjs';
import primeGame from './prime-game.mjs';
import progressionGame from './progression-game.mjs';

const dictGames = {
  even: {
    ruleGame: 'Answer "yes" if the number is even, otherwise answer "no".',
    game: evenNumberGame,
  },
  gcd: {
    ruleGame: 'Find the greatest common divisor of given numbers.',
    game: gcdGame,
  },
  prime: {
    ruleGame: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    game: primeGame,
  },
  progression: {
    ruleGame: 'What number is missing in the progression?',
    game: progressionGame,
  },
  calc: {
    ruleGame: 'What is the result of the expression?',
    game: calcGame,
  },
};

export default (nameOfGame) => {
  playGame(dictGames[nameOfGame].ruleGame, dictGames[nameOfGame].game);
};
