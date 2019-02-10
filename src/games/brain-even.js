import { roundValues, makeGame } from '..';
import { randomInteger } from '../subsidiaryFunctions';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const evenGame = (a = randomInteger()) => {
  const question = a;
  const answer = isEven(a) ? 'yes' : 'no';
  return roundValues(question, answer);
};

export default () => makeGame(description, evenGame);
