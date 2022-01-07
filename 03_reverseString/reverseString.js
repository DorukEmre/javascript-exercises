const reverseString = function(str) {
    let reverseStr = "";
    for (let i = 0; i < str.length; i++) {
        reverseStr += str[str.length-i-1];
    }
    return reverseStr;

};

// Do not edit below this line
module.exports = reverseString;
