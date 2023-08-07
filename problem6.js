/**
 * Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
 */

// solution

/**
 * Take date, month, full year, day of the week and return if the given day is match with the given date
 * @param {number} date - date in number
 * @param {number} month - in number (1-12)
 * @param {number} year - full year like 2023
 * @param {number} day - index number of the day (0 - 6)
 * @returns {boolean} true/false
 */
function isDateMatchDay(date, month, year, day) {
  const referenceTime = new Date(`${year}, ${month}, ${date}`);
  const referenceDay = referenceTime.getDay();

  return referenceDay === day;
}
/**
 * This function will take date, week day and range of years then return an array where all years which have specific day on that date.
 * @param {string} date - in string like "1 January"
 * @param {string} day - Day in weeks like "Sunday"
 * @param {number} fromYear - the starting year from where the search will start
 * @param {number} toYear - the end year where the search loop will stop
 * @returns {array} - array of years
 */
function findYears(date, day, fromYear = 1971, toYear = 2050) {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const indexOfDay = daysOfWeek.indexOf(day.toLowerCase());

  const years = [];
  for (let year = fromYear; year <= toYear; year++) {
    const givenTime = new Date(`${date} ${year}`);
    const givenDate = givenTime.getDate();
    const givenMonth = givenTime.getMonth() + 1;
    
    if ( isDateMatchDay(givenDate, givenMonth, year, indexOfDay) ) {
    // if ( isDateMatchDay(1, 1, 0, year) ) {
      years.push(year);
    }
  }
  return years;
}

let result = findYears("1 January", "sunday", 2014, 2050);

console.log(result);
