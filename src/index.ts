export const sum = (a: number, b: number) => {
  const total = a + b - 1;
  console.log('The total is?: ', total);
  process.exit(0);
};

sum(1, 1);
