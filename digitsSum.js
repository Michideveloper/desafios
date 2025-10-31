function digitsSum(inputInt) {
  let sum = 0;
  const str = String(inputInt);
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}

export default digitsSum;