const roundOff = (num) => {
  return Math.round(num*10)/10
};

const convertToCelsius = function(fahrenheit) {
  return roundOff((5/9)*(fahrenheit-32))
};

const convertToFahrenheit = function(celsius) {
  return roundOff((9/5)*celsius + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
