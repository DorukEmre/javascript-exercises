const sumAll = function(firstNumber, lastNumber) {
    let sum = 0;
    
    if (firstNumber < 0 || lastNumber < 0 || typeof firstNumber !== "number" || typeof lastNumber !== "number") {
        return "ERROR"
    } else if (firstNumber < lastNumber) {
        for (let i = 0 ; i < (lastNumber - firstNumber +1) ; i++) {
            sum = sum + firstNumber + i;
        }
    } else if (firstNumber > lastNumber) {
        for (let i = 0 ; i < (firstNumber - lastNumber +1) ; i++) {
            sum = sum + lastNumber + i;
        }
    } else {
        return " other ERROR"
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
