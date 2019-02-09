import readlineSync from 'readline-sync';
import { random, randomInteger } from './subsidiaryFunctions';

export const greetingStartHeader = (whatShouldBeDone) => {
  console.log('Welcome to the Brain Games!');

  if (whatShouldBeDone) {
    console.log(`${whatShouldBeDone}`);
  }
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (whatShouldBeDone) {
    console.log('');
  }
  return userName;
};

const operatorList = ['+', '-', '*'];
const triplet = (a, b, c) => f => f(a, b, c);

export const makeGame = (whatShouldBeDone, roundMax, checkFunction, questionFunction) => {
  const userName = greetingStartHeader(whatShouldBeDone);

  const makeRound = (roundCurrent) => {
    if (roundCurrent > roundMax) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const initialValue = triplet(randomInteger(), randomInteger(), operatorList[random(0, operatorList.length - 1)]); // eslint-disable-line
    const question = questionFunction(initialValue);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = checkFunction(initialValue);

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
