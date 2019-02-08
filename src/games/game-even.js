import { randomInteger, isEven, makeGame } from '../mainFunctions';
import { maxRoundNumber } from '../mainConstants';
import { greetingMessage, userNameChat } from '..';

greetingMessage();
console.log('Answer "yes" if number even otherwise answer "no".');
console.log('');
const userName = userNameChat();

export default () => makeGame(maxRoundNumber, isEven, randomInteger, userName);
