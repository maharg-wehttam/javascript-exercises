const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
  return x - y;
};

const sum = function(x) {
	let sum = 0;
  for (let num in x) {
    sum += x[num];
  }
  return sum;
};

const multiply = function(nums) {
  if (!nums[0]) return null;
  let product = 1;
  for (let num in nums) {
    product *= nums[num];
  }
  return product;
};

const power = function(x,y) {
  return x ** y;
};

const factorial = function(x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
