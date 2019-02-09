import { makeGame } from '..';

const maxRoundNumber = 3;
const question = z => z((a, b, c) => `${a} ${c} ${b}`);
const correctAnswer = z => z((a, b, c) => (`${eval(`${a} ${c} ${b}`)}`));

export default () => makeGame('What is the result of the expression?', maxRoundNumber, correctAnswer, question);
