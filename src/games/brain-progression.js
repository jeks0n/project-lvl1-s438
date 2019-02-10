import makeGame from '..';
import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';

const description = 'What number is missing in the progression?';

const progressionGame = (length = 10) => {
  const first = randomInteger();
  const step = randomInteger(1, 20);
  const sequenceNumberToHide = randomInteger(1, length);
  const iter = (current, iterNumber, acc, hiddenValue) => {
    if (iterNumber > length) {
      const question = acc;
      const answer = `${hiddenValue}`;
      return cons(question, answer);
    }

    if (iterNumber === sequenceNumberToHide) {
      const newAcc = `${acc} ..`;
      return iter(current + step, iterNumber + 1, newAcc, current);
    }

    const newAcc = `${acc} ${current}`;
    return iter(current + step, iterNumber + 1, newAcc, hiddenValue);
  };

  return iter(first, 1, '');
};

export default () => makeGame(description, progressionGame);
