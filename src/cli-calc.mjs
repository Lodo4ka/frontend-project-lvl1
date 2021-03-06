import readlineSync from "readline-sync";
import entryGame from "./entryGame.mjs";
import calcGame from "./calcGame.mjs";


export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('What is the result of the expression?');
  entryGame(name, calcGame);
};
