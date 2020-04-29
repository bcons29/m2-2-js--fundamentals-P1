// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
// cant make it run !!

function calculateAverage(a, b, c, d, e) {
  // Your code here
  let res = (a + b + c + d + e) / 5;

  return Math.round(res);
}
calculateAverage(76, 60, 83, 100, 78);
console.log(` ${calculateAverage(76, 60, 83, 100, 78)}`);
