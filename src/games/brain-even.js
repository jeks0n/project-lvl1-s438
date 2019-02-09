import { makeGame } from '..';

const maxRoundNumber = 3;
const question = z => z(num => num);
const correctAnswer = z => z(num => (num % 2 === 0 ? 'yes' : 'no'));

export default () => makeGame('Answer "yes" if number even otherwise answer "no".', maxRoundNumber, correctAnswer, question);
