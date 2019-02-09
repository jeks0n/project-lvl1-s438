import { makeGame } from '..';
import { randomInteger as randomInt } from '../subsidiaryFunctions';

const whatShouldBeDone = 'Answer "yes" if number even otherwise answer "no".';

const constructorFunction = (a = randomInt()) => f => f(a);
const question = z => z(num => num);
const isEven = num => num % 2 === 0;
const correctAnswer = z => z(num => (isEven(num) ? 'yes' : 'no'));

export default () => makeGame(whatShouldBeDone, constructorFunction, correctAnswer, question);
