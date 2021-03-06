import readlineSync from "readline-sync";
import entryGame from "./entryGame.mjs";
import evenNumberGame from "./evenNumberGame.mjs";

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  entryGame(name, evenNumberGame);
};
