/**
 * Write a JavaScript function to split a string and convert it into an array of words.
 */

// solution

/**
 * Convert long string to array of words
 * @param {string} string - a text contain words
 * @returns {object[]} array of words
 */
function splitIntoWords(string) {
  if (typeof string !== "string") return "Please provide a string.";
  if (string.trim().length === 0) return "You have provided an empty string.";

  return string.trim().split(" ");
}

console.log(splitIntoWords(45)); // Please provide a string.
console.log(splitIntoWords("")); // You have provided an empty string.
console.log(splitIntoWords("    ")); // You have provided an empty string.
console.log(splitIntoWords("Hello world! How are you?")); // [ 'Hello', 'world!', 'How', 'are', 'you?' ]
