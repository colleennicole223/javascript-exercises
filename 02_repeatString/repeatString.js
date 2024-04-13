

const repeatString = function(inputWord, inputNumber) {
    let repeatedWord = ""

    if (inputNumber<0){
        return "ERROR"
    } else {
        for (i=1; i<(inputNumber+1); i++){
            repeatedWord += inputWord;
        }
        return repeatedWord
    }
};

// Do not edit below this line
module.exports = repeatString;
