const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	 return a-b;
};

const sum = function(array) {
return array.reduce((total,current) => total +current,0);
};

const multiply = function(arr) {
  return arr.length
  ? arr.reduce((accumulator, nextItem) => accumulator*nextItem)
  :0;

};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(n) {
	if (n===0 || n===1){
    return 1;
  } else {
    for(let i = n - 1; i>=1; i--){
      n*=i;
    };
    return n;
  };

};
// npm test calculator.spec.js
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
