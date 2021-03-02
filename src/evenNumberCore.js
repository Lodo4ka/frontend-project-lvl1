const generateRandomNumber = () => Math.floor(Math.random() * 100);

let countRightAnswer = 0;

const isEvenNumber = (number) => number % 2 === 0;

const oppositeAnswer = (answer) => {
  if (answer === 'yes') return 'no';
  return 'yes';
};

const checkAnswer = (number, answer) => {
  if ((isEvenNumber(number) && answer === 'yes') || (!isEvenNumber(number) && answer === 'no')) {
    countRightAnswer += 1;
    return countRightAnswer === 3 ? 'win' : 'right';
  }
  return 'loose';
};

module.exports = { generateRandomNumber, checkAnswer, oppositeAnswer };
