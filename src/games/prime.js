import makeGame from '..';
import { cons } from 'hexlet-pairs';
import randomInteger from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const iter = (i) => {
    if (i > num / 2) {
      return true;
    }

    if (num % i === 0) {
      return false;
    }

    return iter(i + 1);
  };

  return iter(2);
};

const primeGame = () => {
  const question = randomInteger();
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => makeGame(description, primeGame);
