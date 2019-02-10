import { roundValues, makeGame } from '..';
import { random, randomInteger } from '../subsidiaryFunctions';

const description = 'What number is missing in the progression?';

const progressionGame = (first = randomInteger(), step = random(1, 20), length = 10) => {
  const sequenceNumberToHide = random(1, length);
  const iter = (current, iterNumber, acc, hiddenValue) => {
    if (iterNumber > length) {
      const question = acc;
      const answer = `${hiddenValue}`;
      return roundValues(question, answer);
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
