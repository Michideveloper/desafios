import isPalindrome from './isPalindrome.js';

describe('isPalindrome', () => {
  test('isPalindrome("aabaa") deberia ser true', () => {
    expect(isPalindrome('aabaa')).toBe(true);
  });

  test('isPalindrome("abac") deberia ser false', () => {
    expect(isPalindrome('abac')).toBe(false);
  });

  test('isPalindrome("salas") deberia ser true', () => {
    expect(isPalindrome('salas')).toBe(true);
  });
});
