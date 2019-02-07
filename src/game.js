import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
console.log('');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('');

const minNumber = 0;
const maxNumber = 1000;
const random = (minNum, maxNum) => () => Math.floor(minNum + Math.random() * (maxNum + 1 - minNum));
const randomInteger = random(minNumber, maxNumber);

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const gameRounds = (roundMax) => {
  const iter = (roundCurrent) => {
    if (roundCurrent > roundMax) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = randomInteger();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question);

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(roundCurrent + 1);
  };

  iter(1);
};

export default gameRounds;
