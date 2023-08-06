/**
 * 3. Write a JavaScript program to get the current date.
 * Expected Output :
 * mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

// solution

/**
 * this function take a format then provide current date in given format.
 * @param {string} [format = 'mm-dd-yyyy'] format take one form this list (mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy)
 * @returns {string} - current date in given format
 */
function getCurrentDate(format = "mm-dd-yyyy") {
  // current data
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  const year = today.getFullYear();

  // padded by "0"
  const month = currentMonth.toString().padStart(2, "0");
  const date = currentDay.toString().padStart(2, "0");

  if (format === "mm-dd-yyyy") return `${month}-${date}-${year}`;
  if (format === "mm/dd/yyyy") return `${month}/${date}/${year}`;
  if (format === "dd-mm-yyyy") return `${date}-${month}-${year}`;
  if (format === "dd/mm/yyyy") return `${date}/${month}/${year}`;
}

console.log(getCurrentDate());
console.log(getCurrentDate('mm/dd/yyyy'));
console.log(getCurrentDate('dd-mm-yyyy'));
console.log(getCurrentDate('dd/mm/yyyy'));
