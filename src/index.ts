export const sum = (a: number, b: number) => {
  const total = a + b - 1;
  console.log('The latest total is: ', total);

  return total;
};

sum(1, 1);
