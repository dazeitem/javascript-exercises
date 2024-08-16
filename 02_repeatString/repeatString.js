const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    } else {
        let concatString = ''
        for (let i = 0; i < num; i++) {
            concatString += string
        }
        return concatString
    }
};

// Do not edit below this line
module.exports = repeatString;
