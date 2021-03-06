import readlineSync from "readline-sync";
import entryGame from "./entry-game.mjs";
import gcdGame from "./gcd-game.mjs";

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  entryGame(name, gcdGame);
};
