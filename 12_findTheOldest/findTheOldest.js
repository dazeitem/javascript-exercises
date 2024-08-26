const findTheOldest = function(arr) {
    // Initialize variables
    let oldestPerson;
    let oldestRecordedAge = 0;
    let objectAge = 0;

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
