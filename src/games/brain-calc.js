import { makeGame } from '..';
import {
  random, pair, cons, cdr,
} from '../subsidiaryFunctions';

const whatShouldBeDone = 'What is the result of the expression?';

const operatorFunction = (num = random(0, 2)) => {
  switch (num) {
    case 0:
      return pair(z => z((a, b) => `${a} + ${b}`), z => z((a, b) => a + b));
    case 1:
      return pair(z => z((a, b) => `${a} - ${b}`), z => z((a, b) => a - b));
    case 2:
      return pair(z => z((a, b) => `${a} * ${b}`), z => z((a, b) => a * b));
    default:
      return null;
  }
};

const formulaText = operator => cons(operator);
const formulaCalc = operator => cdr(operator);

const constructorFunction = (pairInit = pair(), c = operatorFunction()) => f => f(pairInit, c);
const question = z => z((pairInit, c) => `${formulaText(c)(pairInit)}`);
const correctAnswer = z => z((pairInit, c) => (`${formulaCalc(c)(pairInit)}`));

export default () => makeGame(whatShouldBeDone, constructorFunction, correctAnswer, question);
