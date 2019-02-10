import makeGame from '..';
import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const evenGame = () => {
  const question = randomInteger();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => makeGame(description, evenGame);
