import makeGame from '..';
import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (first, second) => {
  const minValue = Math.min(first, second);
  const iter = (num) => {
    if (num < 1) {
      return 1;
    }

    if (first % num === 0 && second % num === 0) {
      return num;
    }

    return iter(num - 1);
  };

  return iter(minValue);
};

const gcdGame = () => {
  const first = randomInteger();
  const second = randomInteger();
  const question = `${first} ${second}`;
  const answer = `${gcd(first, second)}`;
  return cons(question, answer);
};

export default () => makeGame(description, gcdGame);
