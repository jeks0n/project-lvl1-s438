export const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const min = 0;
const max = 30;
export const randomInteger = () => random(min, max);
