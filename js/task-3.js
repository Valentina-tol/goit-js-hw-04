'use strict';

// Return numbers greater than the given value
function filterArray(numbers, value) {
  const filteredNumbers = [];

  // Check each number in the array
  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  // Return the filtered array
  return filteredNumbers;
}

// Test the function
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
