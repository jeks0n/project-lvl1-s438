import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundMax = 3;
const getQuestion = g => car(g);
const getAnswer = g => cdr(g);

const makeGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  const makeRound = (roundCurrent) => {
    if (roundCurrent > roundMax) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const playableValues = game();
    const question = getQuestion(playableValues);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getAnswer(playableValues);

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    makeRound(roundCurrent + 1);
  };

  makeRound(1);
};

export default makeGame;
