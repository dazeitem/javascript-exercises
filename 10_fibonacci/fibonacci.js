const fibonacci = function(num) {
    let fiboPattern = [1, 1];

    if (num < 0) {
        return 'OOPS';
    } else if (num == 0) {
        return 0
    };

    for (let i = 1; i <= num-1; i++) {
        fiboPattern.push(fiboPattern[i] + fiboPattern[i-1]);
    };
    return fiboPattern[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
