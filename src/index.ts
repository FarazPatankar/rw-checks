export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('dev only output');
  }
  return a + b - 1;
};

const total = sum(1, 1);
console.log('total is: ', total);
