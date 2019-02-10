import makeGame from '..';
import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';

const description = 'What is the result of the expression?';

const calcGame = () => {
  const a = randomInteger();
  const b = randomInteger();
  const c = randomInteger(0, 2);

  if (c === 0) {
    const question = `${a} + ${b}`;
    const answer = `${a + b}`;
    return cons(question, answer);
  } if (c === 1) {
    const question = `${a} - ${b}`;
    const answer = `${a - b}`;
    return cons(question, answer);
  } if (c === 2) {
    const question = `${a} * ${b}`;
    const answer = `${a * b}`;
    return cons(question, answer);
  }
  return null;
};

export default () => makeGame(description, calcGame);
