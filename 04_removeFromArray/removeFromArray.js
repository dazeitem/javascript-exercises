const removeFromArray = function(values, ...toRemove) {
    let finalArray = []

    for (let i = 0; i < values.length; i++) {
        if (!toRemove.includes(values[i])) {
            finalArray.push(values[i]);
        }
    }  
    return finalArray
};

// Do not edit below this line
module.exports = removeFromArray;
