/**
 * Write a JavaScript program to find the area of a triangle where three sides are given
 */

// solution
/**
 * this function take 3 side lengths then return the area of that triangle
 * @param {number} side1 - length
 * @param {number} side2 - length
 * @param {number} side3 - length
 * @returns triangle area
 */
function getTriangleArea(side1, side2, side3) {
  const perimeter = side1 + side2 + side3;
  const halfPerimeter = perimeter / 2;

  return (triangleArea = Math.sqrt(
    halfPerimeter *
      (halfPerimeter - side1) *
      (halfPerimeter - side2) *
      (halfPerimeter - side3)
  ));
}

console.log(getTriangleArea(5, 6, 7))