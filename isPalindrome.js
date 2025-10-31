function isPalindrome(inputStr) {
  const reversedStr = inputStr.split('').reverse().join('');
  return inputStr === reversedStr;
}

export default isPalindrome;