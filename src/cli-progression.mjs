import readlineSync from "readline-sync";
import entryGame from "./entryGame.mjs";
import progressionGame from "./progressionGame.mjs";

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('What number is missing in the progression?');
  guessNumber(name, progressionGame);
};
