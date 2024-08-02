const fibonacci = function(number) {
// 1[1] 1[2] 2[3] 3[4 num] 5[5] 8[6]
    if(number == 0){return 0;}
    if(number < 0){return "OOPS";}

    let twoAgo = 1;
    let oneAgo = 1; 

    for (let i = 2; i < number; i++){
        let current = oneAgo + twoAgo;
        twoAgo = oneAgo;
        oneAgo = current;
    }
    return oneAgo;
};

// Do not edit below this line
module.exports = fibonacci;
