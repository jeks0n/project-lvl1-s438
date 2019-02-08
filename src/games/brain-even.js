import { random } from '../subsidiaryFunctions';
import { makeGame } from '..';

const maxRoundNumber = 3;
const min = 0;
const max = 10;
const randomInteger = () => random(min, max);
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => makeGame('Answer "yes" if number even otherwise answer "no".', maxRoundNumber, isEven, randomInteger);
