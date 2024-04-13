const removeFromArray = function(array, ...removeItems) {
    let newarray = [];

    array.forEach((item) => {
        if(!removeItems.includes(item)){
            newarray.push(item);
        }
    }); 
    return newarray;
} 

// Do not edit below this line
module.exports = removeFromArray;
