const removeFromArray = function(array, ...removedItem) {
    for (let i = 0 ; i < removedItem.length ; i++) {
        
        if (array.includes(removedItem[i]) === true) {
            array.splice(array.indexOf(removedItem[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


// official solution: check the array and if it's not in args push it to newArray.
const removeFromArray = function (...args) {
    const array = args[0];
    const newArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
          }
        });
      
  return newArray;
};