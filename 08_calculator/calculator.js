const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce(((total,current) => total + current),0);
};

const multiply = function(arr) {
  return arr.reduce(((product,current) => product * current));
};

const power = function(a, b) {
	return Math.pow(a, b); 
};

const factorial = function(a) {
  // a*(a-1)*(a-2)(a-3)*...etc
  if(a == 0 || a == 1){
    return 1;
  }else{
    let b = a;
    for(i=1; i<a; i++){
      b *= (a-i);
    }
    return b;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
