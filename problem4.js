/**
 * Write a JavaScript program to rotate a string in the right direction.
 */

// solution

/**
 * this function takes a string and returns that string in the reverse way
 * @param {string} string - the text need to rotate
 * @return rotated text
 */
function rotateString(string) {
  const splitText = string.split("");
  const reversedArr = splitText.reverse();
  return (rotateText = reversedArr.join(""));
}

console.log(rotateString("Hello JavaScript")); // tpircSavaJ olleH
