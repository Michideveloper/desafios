import integerSort from './integerSort.js';

describe('integerSort', () => {
  test('integerSort([5, -2, 10, 0, 3, -7]) deberia ser [-7, -2, 0, 3, 5, 10]', () => {
    expect(integerSort([5, -2, 10, 0, 3, -7])).toEqual([-7, -2, 0, 3, 5, 10]);
  });
});
