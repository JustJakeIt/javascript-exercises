const removeFromArray = function (...args) {
  let array = args[0];
  let newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// npm test removeFromArray.spec.js

// Do not edit below this line
module.exports = removeFromArray;
