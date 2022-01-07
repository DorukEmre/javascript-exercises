const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9
   return celsius = Math.round(celsius * 10) / 10
};

const ctof = function(celsius) {
  let fahrenheit = celsius * 9/5 + 32 
  return fahrenheit = Math.round(fahrenheit * 10) / 10
};


ftoc(-100) // fahrenheit to celsius, should return 0

ctof(99) // celsius to fahrenheit, should return 32


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
