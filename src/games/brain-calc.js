import makeGame from '..';
import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';

const description = 'What is the result of the expression?';

const calcGame = () => {
  const first = randomInteger();
  const second = randomInteger();
  const operatorNum = randomInteger(0, 2);

  if (operatorNum === 0) {
    const question = `${first} + ${second}`;
    const answer = `${first + second}`;
    return cons(question, answer);
  } if (operatorNum === 1) {
    const question = `${first} - ${second}`;
    const answer = `${first - second}`;
    return cons(question, answer);
  } if (operatorNum === 2) {
    const question = `${first} * ${second}`;
    const answer = `${first * second}`;
    return cons(question, answer);
  }
  return null;
};

export default () => makeGame(description, calcGame);
