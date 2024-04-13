const reverseString = function(sentence) {
    let reversed = ""
    while (sentence.length>0){
        reversed += sentence.slice(sentence.length-1);
        sentence = sentence.slice(0,sentence.length-1)
    } return reversed

};

// Do not edit below this line
module.exports = reverseString;
