const palindromes = function(inputStr) {
    
    let reverseStr = "";
    let newInputStr = inputStr.replace(/[^\w]/g, "").toLowerCase();
    
    for (let i = 0; i < newInputStr.length; i++) {
        reverseStr += newInputStr[newInputStr.length-i-1];
    }

    if (newInputStr === reverseStr) {
        return true
    }
    return false
};


palindromes('Animal loots foliated detail of stool lamina.') // true
// palindromes('Tac.os') // false

// Do not edit below this line
module.exports = palindromes;
