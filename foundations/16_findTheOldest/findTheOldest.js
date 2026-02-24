const findTheOldest = function(personArray) {
    function calcAge(person) {
        if (person.yearOfDeath) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return 2026 - person.yearOfBirth;
        }
    }
    return personArray.reduce((oldestPerson, currentPerson) => {
        if (calcAge(oldestPerson) < calcAge(currentPerson)) {
            return currentPerson;
        } else {
            return oldestPerson;
        }
    }, personArray[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
