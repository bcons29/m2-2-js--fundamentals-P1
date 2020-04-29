// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {
  var res = 0;

  grades.forEach((element) => {
    res = res + element;
  });

  res = Math.round(res / grades.length);

  if (res < 60) {
    return "F";
  } else if (res < 70) {
    return "D";
  } else if (res < 80) {
    return "C";
  } else if (res < 90) {
    return "B";
  } else {
    return "A";
  }
}

console.log(calculateAverage([76, 60, 83, 100, 78]));

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
