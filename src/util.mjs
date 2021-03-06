const generateRandomNumber = () => Math.floor(Math.random() * 100);

const generateRandomMathOperator = () => {
  const mathOperator = ['+', '-', '*'];
  const operator = Math.floor(Math.random() * 3);
  return mathOperator[operator];
};

const calculateNumber = (operator, first, second) => {
  const firstInt = parseInt(first, 10);
  const secondInt = parseInt(second, 10);
  if (operator === '+') {
    return firstInt + secondInt;
  }
  if (operator === '-') {
    return firstInt - secondInt;
  }
  if (operator === '*') {
    return firstInt * secondInt;
  }
  return 0;
};

const isEvenNumber = (number) => number % 2 === 0;

const nearDivider = (num1, num2) => {
  const maxNumber = Math.max(num1, num2);
  const calculateDivider = (max) => {
    if (num1 % max === 0 && num2 % max === 0) {
      return max;
    }
    return calculateDivider(max - 1);
  };
  return calculateDivider(maxNumber);
};

const generateProgression = () => {
  const startProg = generateRandomNumber();
  const numberProg = Math.floor(Math.random() * 10);
  return Array.from({ length: 10 })
    .reduce((acc, _, index) => {
      acc.push(startProg + (index * numberProg));
      return acc;
    }, []);
};

const removeElemProgression = (progression) => {
  const removedIndex = Math.floor(Math.random() * 10);
  return progression.map((progElem, i) => {
    if (i === removedIndex) {
      return '..';
    }
    return progElem;
  });
};

const calculateEmptyOfProgression = (progression) => {
  const fullNumber = progression.filter((elem) => elem !== '..');
  const numberProg = fullNumber.reduce((acc, currentNumber, i) => {
    if (fullNumber[i + 1]) {
      return parseInt(fullNumber[i + 1], 10) - parseInt(currentNumber, 10);
    }
    return acc;
  }, 0);
  return progression.map((elem, i) => {
    if (elem === '..') {
      return parseInt(progression[i - 1], 10) + parseInt(numberProg, 10);
    }
    return undefined;
  }).filter(Boolean)[0];
};

const isPrime = (number) => {
  if (number < 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  generateRandomNumber,
  isEvenNumber,
  generateRandomMathOperator,
  calculateNumber,
  nearDivider,
  generateProgression,
  removeElemProgression,
  calculateEmptyOfProgression,
  isPrime,
};
