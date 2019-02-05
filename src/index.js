export default () => {
    const readlineSync = require('readline-sync');

    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}