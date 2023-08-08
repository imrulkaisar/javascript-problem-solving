/**
 * Write a JavaScript function to check whether an 'input' is a string or not.
 * 
 */
// solution 

/**
 * determine whether it is string or not
 * @param {*} input - any data
 * @returns {boolean} true/false
 */
const isString = input => typeof input === "string"

console.log(isString('')) // true
console.log(isString('Hello')) // true
console.log(isString(45)) // false