import { roundValues, makeGame } from '..';
import { random, randomInteger } from '../subsidiaryFunctions';

const description = 'What is the result of the expression?';

const calcGame = (a = randomInteger(), b = randomInteger(), c = random(0, 2)) => {
  if (c === 0) {
    const question = `${a} + ${b}`;
    const answer = `${a + b}`;
    return roundValues(question, answer);
  } if (c === 1) {
    const question = `${a} - ${b}`;
    const answer = `${a - b}`;
    return roundValues(question, answer);
  } if (c === 2) {
    const question = `${a} * ${b}`;
    const answer = `${a * b}`;
    return roundValues(question, answer);
  }
  return null;
};

export default () => makeGame(description, calcGame);
