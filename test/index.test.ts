import { sum } from '../src/index';

describe('sum', () => {
  it('adds two numbers together', async () => {
    // Sleep for 4 seconds
    await new Promise((resolve) => setTimeout(resolve, 4000));

    expect(sum(1, 1)).toEqual(2);
  });
});
