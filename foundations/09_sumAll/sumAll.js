const sumAll = function(start, stop) {
    if (
        typeof start !== 'number' |
        typeof stop !== 'number' |
        Math.floor(start) !== start |
        Math.floor(stop) !== stop |
        start < 0 |
        stop < 0 
    ) {
        return "ERROR";
    }
    let result = 0;
    min = Math.min(start, stop);
    max = Math.max(start, stop);
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
