const sumAll = function(numberInput1, numberInput2) {
    let startingNumber = 0;
    let endingNumber = 0;
    let sumNumbers = 0;

    if (numberInput1 > numberInput2){
        startingNumber = numberInput2;
        endingNumber = numberInput1;
    } else if (numberInput1<0 || numberInput2<0){
        return "ERROR"
    } else if (!Number.isInteger(numberInput1) || !Number.isInteger(numberInput2)){
        return "ERROR"
    } else {
        startingNumber = numberInput1;
        endingNumber = numberInput2;
    }
    for(i=startingNumber; i<endingNumber+1; i++){
        sumNumbers += i;
    } return sumNumbers
};

// Do not edit below this line
module.exports = sumAll;
