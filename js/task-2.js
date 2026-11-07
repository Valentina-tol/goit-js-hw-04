'use strict';

// Combine two arrays and limit the result
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);

  // Return only the allowed number of elements
  return newArray.slice(0, maxLength);
}

// Test the function
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
