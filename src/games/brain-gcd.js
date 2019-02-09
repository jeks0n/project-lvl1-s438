import { makeGame } from '..';

const maxRoundNumber = 3;
const question = z => z((a, b) => `${a} ${b}`);

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

const correctAnswer = z => z((a, b) => (`${gcd(a, b)}`));

export default () => makeGame('Find the greatest common divisor of given numbers.', maxRoundNumber, correctAnswer, question);
