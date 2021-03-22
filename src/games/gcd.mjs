import { generateRandomNumber } from '../util.mjs';

const rule = 'Find the greatest common divisor of given numbers.';

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

const generateRound = () => {
  const firstNumber = generateRandomNumber(0, 99);
  const secondNumber = generateRandomNumber(0, 99);
  const question = `${firstNumber} ${secondNumber}`;
  return {
    question,
    rightAnswer: String(gcd(firstNumber, secondNumber)),
  };
};

export default {
  generateRound, rule,
};
