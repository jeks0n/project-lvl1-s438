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

export const makeGame = (message, constructorFunc, checkFunc, questionFunc, roundMax = 3) => {
  const userName = greetingStartHeader(message);

  const makeRound = (roundCurrent) => {
    if (roundCurrent > roundMax) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const initialValue = constructorFunc();
    const question = questionFunc(initialValue);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = checkFunc(initialValue);

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    makeRound(roundCurrent + 1);
  };

  makeRound(1);
};
