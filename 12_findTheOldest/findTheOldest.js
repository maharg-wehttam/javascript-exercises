const findTheOldest = function(people) {
    let oldest;
    let age;
    for (let person in people) {
        if (oldest === undefined) {
            oldest = people[person];
            age = findAge(people[person]);
        } else {
            if (age < findAge(people[person])) {
                oldest = people[person];
                age = findAge(people[person]);
            }
        }

    }
    return oldest;
};

let currentYear = new Date().getFullYear();

function findAge(obj) {
    if (!obj.yearOfDeath) return currentYear - obj.yearOfBirth;
    return obj.yearOfDeath - obj.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
