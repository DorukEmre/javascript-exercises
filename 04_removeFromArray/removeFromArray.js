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
