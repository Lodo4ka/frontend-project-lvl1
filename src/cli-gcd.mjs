import readlineSync from "readline-sync";
import entryGame from "./entryGame.mjs";
import gcdGame from "./gcdGame.mjs";

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  entryGame(name, gcdGame);
};
