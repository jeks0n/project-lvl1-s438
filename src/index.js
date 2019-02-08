import readlineSync from 'readline-sync';

export const greetingStartHeader = (whatShouldBeDone) => {
  console.log('Welcome to the Brain Games!');

  if (whatShouldBeDone) {
    console.log(`${whatShouldBeDone}`);
  }
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (whatShouldBeDone) {
    console.log('');
  }
  return userName;
};

export const userAnswer = () => readlineSync.question('Your answer: ');

export const loosingMessage = (answer, correctAnswer, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export const makeGame = (whatShouldBeDone, roundMax, checkFunction, questionFunction) => {
  const userName = greetingStartHeader(whatShouldBeDone);

  const makeRound = (roundCurrent) => {
    if (roundCurrent > roundMax) {
      console.log(`Congratulations, ${userName}!`);
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
    console.log('Correct!');
    makeRound(roundCurrent + 1);
  };

  makeRound(1);
};
