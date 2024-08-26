const getTheTitles = function(dict) {
    arr = []
    for (let key of dict) {
        arr.push(key.title);
    };
    return arr
};

// Do not edit below this line
module.exports = getTheTitles;
