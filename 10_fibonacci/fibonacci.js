const fibonacci = function(input) {
    let fibo = [1, 1];
    numberInput = parseInt(input, 10)

    if (numberInput < 0) return "OOPS"

    for (let i = 1; i < numberInput; i++) {
        fibo.push(fibo[i] + fibo[i-1])
    }
    return fibo[numberInput-1]
    
};

// Do not edit below this line
module.exports = fibonacci;
