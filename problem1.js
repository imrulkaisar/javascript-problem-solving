/*
1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

// Solution

/**
 * This function will return the full day of the week
 * @returns the current day
 */
function getCurrentDay() {
  const now = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = now.getDay();
  return weekDays[currentDay];
}

/**
 * this function will return current time in this formate "HH AM : MM : SS"
 * @returns current time
 */
function getCurrentTime() {
  // current time
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentSeconds = now.getSeconds();

  let hours = currentHours;
  let period = "AM";
  let minutes = currentMinutes;
  let seconds = currentSeconds;

  if (currentHours > 12) {
    period = "PM";
    hours = currentHours - 12;
  }

  if (hours === 0) hours = 12; // 00 hours issue solved

  // adding "0" if single character
  if (String(hours).length === 1) hours = "0" + hours;
  if (String(minutes).length === 1) minutes = "0" + minutes;
  if (String(seconds).length === 1) seconds = "0" + seconds;

  return `${hours} ${period} : ${minutes} : ${seconds}`;
}

console.log(`Today is : ${getCurrentDay()} and time is: ${getCurrentTime()}`);
