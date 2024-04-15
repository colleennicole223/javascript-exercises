/*
- check to see if divisable by four
- if they are, skip ones divisable by 100 unless dividable by 400
- return true or false 
*/

const leapYears = function(year) {

if(year%4 == 0){
    if(year%100==0 && year%400!=0){
        return false
    }
    return true
} else{
    return false
}

};

// Do not edit below this line
module.exports = leapYears;
