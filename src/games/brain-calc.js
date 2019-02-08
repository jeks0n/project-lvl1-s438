import { randomArithmeticString, makeGame } from '../mainFunctions';
import { maxRoundNumber } from '../mainConstants';
import { greetingMessage, userNameChat } from '..';

const evalStringResult = string => (`${eval(string)}`);

export default () => {
  greetingMessage();
  console.log('What is the result of the expression?');
  console.log('');
  const userName = userNameChat();

  return makeGame(maxRoundNumber, evalStringResult, randomArithmeticString, userName);
};
