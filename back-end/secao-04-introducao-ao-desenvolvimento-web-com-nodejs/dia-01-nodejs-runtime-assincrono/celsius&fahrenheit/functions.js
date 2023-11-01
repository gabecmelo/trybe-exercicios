const celsiusToFahrenheit = (celsius) => (celsius * 1.8) + 32 ;

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8 ;

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius
}
