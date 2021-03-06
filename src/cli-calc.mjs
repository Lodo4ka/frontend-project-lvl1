import readlineSync from "readline-sync";
import entryGame from "./entry-game.mjs";
import calcGame from "./calc-game.mjs";

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('What is the result of the expression?');
  entryGame(name, calcGame);
};
