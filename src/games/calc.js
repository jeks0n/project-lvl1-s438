import makeGame from '..';
import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';

const description = 'What is the result of the expression?';

const calcGame = () => {
  const first = randomInteger();
  const second = randomInteger();
  const operatorNum = randomInteger(0, 2);

  let question;
  let answer;
  switch (operatorNum) {
    case 0:
      question = `${first} + ${second}`;
      answer = `${first + second}`;
      return cons(question, answer);
    case 1:
      question = `${first} - ${second}`;
      answer = `${first - second}`;
      return cons(question, answer);
    case 2:
      question = `${first} * ${second}`;
      answer = `${first * second}`;
      return cons(question, answer);
    default:
      return null;
  }
};

export default () => makeGame(description, calcGame);
