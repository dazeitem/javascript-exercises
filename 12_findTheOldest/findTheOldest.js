const findTheOldest = function(arr) {
    // Initialize variables
    let peoplePassed = []
    let oldestPerson;
    let oldestRecordedAge = 0;
    let objectAge = 0;

    // Check if yearOfDeath is present.
    let filteredObjects = arr.reduce((acc, obj) => {
        const hasKey = ["yearOfDeath"].some(key => key in obj);
        if (!hasKey) {
          acc.push(obj);
        } else {
            peoplePassed.push(obj)
        }
        return acc;
    }, []); // [] indicates the initial value for the reduce method accumulator

    // Find current date and add that as temporary year of death to calc age
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    for (let obj of filteredObjects) {
        obj.currentDate = year
    }


    // Loop through the objects and find the oldest person.
    for (let obj of peoplePassed) {
        objectAge = obj.yearOfDeath - obj.yearOfBirth;
        if (objectAge > oldestRecordedAge) {
            oldestPerson = obj;
            oldestRecordedAge = objectAge
        };
    };
    for (let obj of filteredObjects) {
        objectAge = obj.currentDate - obj.yearOfBirth;
        if (objectAge > oldestRecordedAge) {
            oldestPerson = obj;
            oldestRecordedAge = objectAge
        };
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
