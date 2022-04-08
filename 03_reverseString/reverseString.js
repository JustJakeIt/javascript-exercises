const reverseString = function (string) {
  let tempArray = string.split('');
  let backward = tempArray.reverse();
  return backward.join('');
};

// Do not edit below this line
module.exports = reverseString;
