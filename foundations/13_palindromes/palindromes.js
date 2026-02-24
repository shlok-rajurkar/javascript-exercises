const palindromes = function (word) {
    const wordArray = [...word].filter((char) => {
        return !([".", " ", ",", "!"].includes(char));
    }).map((char) => {
        return char.toLowerCase();
    });
    const revWordArray = wordArray.toReversed();
    console.log(wordArray);
    console.log(revWordArray);
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] !== revWordArray[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
