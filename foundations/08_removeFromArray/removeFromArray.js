const removeFromArray = function(array, ...unwantedNums) {
    return array.filter((item) => (!unwantedNums.includes(item)))
};

// Do not edit below this line
module.exports = removeFromArray;
