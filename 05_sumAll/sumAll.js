const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
    if (sum < 0) return 'ERROR';
  }
  return sum;
};
// npm test sumAll.spec.js

// Do not edit below this line
module.exports = sumAll;
