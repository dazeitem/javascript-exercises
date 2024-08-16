const reverseString = function(word) {
    let wordLength = word.length
    newWord = ''
    for (let i = wordLength-1; i > -1; i--) {
        newWord += word[i]
    }
    return newWord
};

// Do not edit below this line
module.exports = reverseString;
