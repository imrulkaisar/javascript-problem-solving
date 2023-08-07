/**
 * 1. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
 * 2. Write a JavaScript program to convert temperatures to and from Fahrenheit, Celsius.
 *
 * Formula : c/5 = (f-32)/9
 * Formula: c = (f-32) * (5/9)
 * Formula: f = (9c/5) + 32
 */

// solution 1
/**
 * Take celsius as a parameter then return in Fahrenheit
 * @param {number} c - temperature in celsius
 * @returns {number} temperature in fahrenheit
 */
const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;

console.log(celsiusToFahrenheit(32)); // 89.6

// solution 2
/**
 * Take fahrenheit as a parameter then return in celsius
 * @param {number} f - temperature in fahrenheit
 * @returns {number} temperature in celsius
 */
const fahrenheitToCelsius = (f) => (f - 32) * (5 / 9);

console.log(fahrenheitToCelsius(89.6)); // 32