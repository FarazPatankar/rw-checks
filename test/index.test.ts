import { sum } from '../src/index';

describe('sum', () => {
  it('adds two numbers together', async () => {
    // Sleep for 5 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    expect(sum(1, 1)).toEqual(3);
  });
});
