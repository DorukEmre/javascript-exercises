const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arrayItems) {
	let sumArray = 0;
  arrayItems.forEach(function(arrayItem) {
    sumArray += arrayItem;
  })
  return sumArray;
};

/* Official solution
const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};
*/

const multiply = function(arrayItems) {
	let multiplyArray = 1;
  arrayItems.forEach(function(arrayItem) {
    multiplyArray *= arrayItem;
  })
  return multiplyArray;
};

/* Official solution
const multiply = function(array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};
*/

const power = function(a, b) {
  return a ** b;
};

const factorial = function(items) {
  let fact = 1;

  for (let i = 1; i <= items; i++) {
    fact *= i
  }
  return fact;
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
