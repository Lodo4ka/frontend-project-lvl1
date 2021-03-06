import readlineSync from "readline-sync";
import entryGame from "./entry-game.mjs";
import evenNumberGame from "./even-number-game.mjs";

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  entryGame(name, evenNumberGame);
};
