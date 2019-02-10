import { roundValues, makeGame } from '..';
import { randomInteger } from '../subsidiaryFunctions';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (first, second) => {
  const minValue = Math.min(first, second);
  const iter = (num, acc) => {
    if (num > minValue) {
      return acc;
    }

    if (first % num === 0 && second % num === 0) {
      return iter(num + 1, num);
    }

    return iter(num + 1, acc);
  };

  return iter(2, 1);
};

const gcdGame = (a = randomInteger(), b = randomInteger()) => {
  const question = `${a} ${b}`;
  const answer = `${gcd(a, b)}`;
  return roundValues(question, answer);
};

export default () => makeGame(description, gcdGame);
