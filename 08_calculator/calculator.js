const checkIfArray = (arr) => {
    if (Array.isArray(arr[0])) {
      return arr[0];
    };
    return arr;
};

const add = function(...nums) {
  let sum = 0;
	for (let i = 0; i < 2; i++ ) {
    sum += nums[i];
  };
  return sum;
};

const subtract = function(...nums) {
  let difference = nums[0];
	difference -= nums[1];
  return difference;
};

const sum = function(...nums) {
	let sum = checkIfArray(nums);
  let finalSum = 0;
  for (let number of sum) {
    finalSum += number;
  };
  return finalSum;
};

const multiply = function(nums) {
  let product = 1;
  let toMultiply = nums;
  for (let number of toMultiply) {
    product *= number;
  };
  return product;
};

const power = function(...nums) {
	return nums[0] ** nums[1];
};

const factorial = function(num) {
  let answ = 1;
	for (let i = num; i > 0; i--) {
    answ *= i;
  };
  return answ;
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
