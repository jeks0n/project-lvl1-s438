import { minNumber, maxNumber, operatorList } from './mainConstants';
import { congratulationMessage, loosingMessage, correctMessage, userAnswer } from './index'; // eslint-disable-line

const random = (minNum, maxNum) => () => Math.floor(minNum + Math.random() * (maxNum + 1 - minNum));

export const randomInteger = random(minNumber, maxNumber);
export const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export const randomArithmeticString = () => `${randomInteger()} ${operatorList[random(0, operatorList.length - 1)()]} ${randomInteger()}`;

export const makeGame = (roundMax, checkFunction, questionFunction, userName) => {
  const makeRound = (roundCurrent) => {
    if (roundCurrent > roundMax) {
      congratulationMessage(userName);
      return;
    }

    const question = questionFunction();
    console.log(`Question: ${question}`);
    const answer = userAnswer();
    const correctAnswer = checkFunction(question);

    if (answer !== correctAnswer) {
      loosingMessage(answer, correctAnswer, userName);
      return;
    }
    correctMessage();
    makeRound(roundCurrent + 1);
  };

  makeRound(1);
};
