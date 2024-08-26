const palindromes = function (string) {

    // Filter out punctuation and spaces.
    let filteredStr = string
        .split('')
        .filter(char => /[a-zA-Z0-9]/.test(char))
        .join('')
        .toLowerCase();

    // Initialize arrays.
    word = []
    wordReversed = []

    // Add filtered letters to above arrays, then compare.
    for (let char of filteredStr) {
        word.push(char)
        wordReversed.unshift(char)
    }
    return word.toString() == wordReversed.toString()
};

// Do not edit below this line
module.exports = palindromes;
