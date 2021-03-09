const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const answerYesOrNo = (answer) => (answer ? 'yes' : 'no');

export { generateRandomNumber, answerYesOrNo };
