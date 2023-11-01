const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./functions')

const fahrenheit = celsiusToFahrenheit(15);
const celsius = fahrenheitToCelsius(59);

console.log(`15ºC para F: ${fahrenheit}F`);
console.log();
console.log(`59F para ºC: ${celsius}ºC`);
