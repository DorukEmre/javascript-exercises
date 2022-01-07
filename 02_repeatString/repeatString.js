const repeatString = function(string, num) {
    let outputString = "";
    for  (let i = 0; i < num; i++) {
        outputString += string;
    }
    if (num >=0) {
    return outputString;
    }
    return "ERROR"
};

// Do not edit below this line
module.exports = repeatString;
