import readlineSync from 'readline-sync';

export const greetingStartHeader = (description) => {
  console.log('Welcome to the Brain Games!');

  if (description) {
    console.log(`${description}`);
  }
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (description) {
    console.log('');
  }
  return userName;
};

const roundQuestion = g => g(a => a);
const roundAnswer = g => g((a, b) => b);
export const roundValues = (a, b) => f => f(a, b);

export const makeGame = (description, game, roundMax = 3) => {
  const userName = greetingStartHeader(description);

  const makeRound = (roundCurrent) => {
    if (roundCurrent > roundMax) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const playableValues = game();
    const question = roundQuestion(playableValues);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = roundAnswer(playableValues);

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
