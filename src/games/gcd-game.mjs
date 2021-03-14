import { generateRandomNumber } from '../util.mjs';

const textRuleGame = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const maxNumber = Math.max(num1, num2);
  const calculateDivider = (max) => {
    if (num1 % max === 0 && num2 % max === 0) {
      return max;
    }
    return calculateDivider(max - 1);
  };
  return calculateDivider(maxNumber);
};

const generateRoundGame = () => {
  const firstNumber = generateRandomNumber(0, 99);
  const secondNumber = generateRandomNumber(0, 99);
  return `${firstNumber} ${secondNumber}`;
};

const getRightAnswer = (expression) => {
  const [firstNumber, secondNumber] = expression.split(' ');
  return String(gcd(firstNumber, secondNumber));
};

export default {
  generateRoundGame, getRightAnswer, textRuleGame,
};
