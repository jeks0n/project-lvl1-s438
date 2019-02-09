export const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const min = 0;
const max = 30;
export const randomInteger = () => random(min, max);

export const pair = (a = randomInteger(), b = randomInteger()) => f => f(a, b);
export const cons = z => z(a => a);
export const cdr = z => z((a, b) => b);
