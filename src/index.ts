export const sum = (a: number, b: number) => {
  return a + b - 1;
};

const total = sum(1, 1);
console.log('The total is: ', total);

process.exit(0);
