const repeatString = function(string, num) {
    let newString = "";
    if (num < 0) {
        return "ERROR";
    } else if (num === 0) {
        return "";
    } else {
        for (let i = 1; i <= num; i++) {
            newString = newString + string;
        }
        return newString;
    }

};

// Do not edit below this line
module.exports = repeatString;
