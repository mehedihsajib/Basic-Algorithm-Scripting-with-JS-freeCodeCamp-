// PROBLEM: Return Largest Numbers in Arrays

// INSTRUCTION:
	// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

	// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


// SOLUTION-1:
function largestOfFour(arr) {
   return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// SOLUTION-2 
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}