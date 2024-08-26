const findTheOldest = function(arr) {
    // Initialize variables
    let oldestPerson;
    let oldestRecordedAge = 0;
    let objectAge = 0;

    // Check if yearOfDeath is present.
    let filteredObjects = arr.reduce((acc, obj) => {
        const hasKey = [yearOfDeath].some(key => key in obj);
        if (!hasKey) {
          acc.push(obj);
        }
        return acc;
    }, []); // [] indicates the initial value for the reduce method accumulator

    // Loop through the objects and find the oldest person.
    for (let obj of arr) {
        objectAge = obj.yearOfDeath - obj.yearOfBirth;
        if (objectAge > oldestRecordedAge) {
            oldestPerson = obj;
            oldestRecordedAge = objectAge
        };
    };
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
