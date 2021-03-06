import readlineSync from "readline-sync";
import entryGame from "./entryGame.mjs";
import primeGame from "./primeGame.mjs";

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  entryGame(name, primeGame);
};
