import { random } from '../subsidiaryFunctions';
import { makeGame } from '..';

const maxRoundNumber = 3;
const min = 0;
const max = 10;
const operatorList = ['+', '-', '*'];
const randomArithmeticString = () => `${random(min, max)} ${operatorList[random(0, operatorList.length - 1)]} ${random(min, max)}`;
const evalStringResult = string => (`${eval(string)}`);

export default () => makeGame('What is the result of the expression?', maxRoundNumber, evalStringResult, randomArithmeticString);
