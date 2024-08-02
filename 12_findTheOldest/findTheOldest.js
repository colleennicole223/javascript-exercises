const findTheOldest = function(arr) {
    return arr.reduce((oldestName, currentName)=>{
        let oldestAge = getAge(oldestName.yearOfBirth, oldestName.yearOfDeath);
        let currentAge = getAge(currentName.yearOfBirth, currentName.yearOfDeath);
        return oldestAge < currentAge ? currentName : oldestName;
    });
        
};

function getAge(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
