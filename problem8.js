/**
 * Write a JavaScript program to calculate the days left before Christmas.
 */

// solution

function dayBeforeNextChristmas() {
  const today = new Date();
  let christmas = new Date(today.getFullYear(), 11, 25);

  // check if the christmas of this year is already passed
  if (today > christmas) christmas.setFullYear(today.getFullYear() + 1);

  const timeDifference = christmas - today;
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return `${daysLeft} days left before next christmas.`;
}

console.log(dayBeforeNextChristmas());
