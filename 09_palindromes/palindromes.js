


const palindromes = function (string) {

    // Only what letters and numbers 
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    updatedString = string.toLowerCase().split("").filter((character)=>alphanumerical.includes(character)).join("")
    reversedString = updatedString.split("").reverse().join("");
    if(updatedString===reversedString){
        return true; 
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
