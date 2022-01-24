
const findTheOldest = function(people) {
    const oldest = people.sort((a,b) => {
        if (a.hasOwnProperty("yearOfDeath") === false ||
        b.hasOwnProperty("yearOfDeath") === false) {
            if (a.hasOwnProperty("yearOfDeath") === false) {
                aAge = new Date().getFullYear() - a.yearOfBirth
                bAge = b.yearOfDeath - b.yearOfBirth
                return aAge > bAge ? -1 : 1;
            } else if (b.hasOwnProperty("yearOfDeath") === false) {
                aAge = a.yearOfDeath - a.yearOfBirth
                bAge = new Date().getFullYear() - b.yearOfBirth
                return aAge > bAge ? -1 : 1;
            }
        }
        aAge = a.yearOfDeath - a.yearOfBirth
        bAge = b.yearOfDeath - b.yearOfBirth
        return aAge > bAge ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
