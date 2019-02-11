import makeGame from '..';
import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;
const calcElement = (first, step, i) => first + step * i;

const progressionGame = () => {
  const first = randomInteger();
  const step = randomInteger(1, 20);
  const hiddenPosition = randomInteger(0, length - 1);

  const answer = `${calcElement(first, step, hiddenPosition)}`;

  const iter = (i, acc) => {
    if (i >= length) {
      return acc.trim();
    }

    const newString = (i === hiddenPosition) ? '..' : calcElement(first, step, i);
    const newAcc = `${acc} ${newString}`;
    return iter(i + 1, newAcc);
  };

  const question = iter(0, '');

  return cons(question, answer);
};

export default () => makeGame(description, progressionGame);
