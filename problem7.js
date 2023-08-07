/**
 * Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
 */

// solution

/**
 * Take the guess number return whether match the random number or not
 * @param {number} input (0 - 10)
 * @returns {string}
 */
function guessTheNumber(input = 0) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  return randomNumber === input ? "Good Work" : "Not matched. The number was: " + randomNumber;
}
console.log(guessTheNumber(7));
