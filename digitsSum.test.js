import digitsSum from './digitsSum.js';

describe('digitsSum', () => {
  test('digitsSum(999) deberia ser 27', () => {
    expect(digitsSum(999)).toBe(27);
  });

  test('digitsSum(9184501) deberia ser 28', () => {
    expect(digitsSum(9184501)).toBe(28);
  });

  test('digitsSum(12345) deberia ser 15', () => {
    expect(digitsSum(12345)).toBe(15);
  });
});
