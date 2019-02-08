import readlineSync from 'readline-sync';

export const greetingMessage = () => console.log('Welcome to the Brain Games!');

export const userNameChat = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const userAnswer = () => readlineSync.question('Your answer: ');

export const congratulationMessage = (userName) => console.log(`Congratulations, ${userName}!`);

export const loosingMessage = (answer, correctAnswer, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export const correctMessage = (userName) => console.log('Correct!');
