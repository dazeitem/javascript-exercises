const sumAll = function(...nums) {
    let numArray = [];
    let numSum = 0;
    for (let element of nums) {
        if (!Number.isInteger(element) || Array.isArray(element) || element < 0) {
            return 'ERROR';
        } else {
            numArray.push(element);
        }
    };
    numArray.sort((a, b) => a - b);
    for (let i = numArray[0]; i <= numArray[1]; i++) {
        numSum += i;
    };
    return numSum
};

// Do not edit below this line
module.exports = sumAll;
