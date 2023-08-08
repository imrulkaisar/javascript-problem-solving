/**
 * Write a JavaScript function to check whether a string is blank or not.
 */

// solution

/**
 * Check whether a string is blank or not
 * @param {string} string - any text/string
 * @returns {boolean} true/false
 */
function isEmptyString(string) {
  if (typeof string !== "string") return "Please provide a string.";
  return string.trim().length === 0;
}

console.log(isEmptyString(45)); // Please provide a string
console.log(isEmptyString("")); // true
console.log(isEmptyString("    ")); // true
console.log(isEmptyString("Any String")); // false
