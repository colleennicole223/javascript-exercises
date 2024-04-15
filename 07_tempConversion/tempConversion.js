const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  if (!celsius%1==0){
    return parseFloat(celsius.toFixed(1));
  }
  return celsius
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  if (!fahrenheit%1==0){
    return parseFloat(fahrenheit.toFixed(1));
  }
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
