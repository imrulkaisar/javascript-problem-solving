/**
 * Write a JavaScript program to determine whether a given year is a leap year
 *
 * solution
 * 1. year will be divided by 4 and
 * 2. year won't be divided by 100
 * 3. or year will divided by 400
 */

/**
 * this function will return true if the given year is a leap year. Otherwise, return false.
 * @param {number} year - such as: 2022, 2023, 2024, 1800, 2000
 * @returns {boolean} true/false
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

// simple solution
/**
 * this function will return true if the given year is a leap year. Otherwise, return false.
 * @param {number} year - such as: 2022, 2023, 2024, 1800, 2000
 * @returns {boolean} true/false
 */
const isLeapYearSimple = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0