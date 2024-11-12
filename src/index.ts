export const sum = (a: number, b: number) => {
  const total = a + b;
  console.log('The latest total was now: ', total);

  return total;
};

sum(1, 1);
