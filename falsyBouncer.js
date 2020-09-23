// PROBLEM: Falsy Bouncer

// INSTRUCTION:
	// Remove all falsy values from an array.
	// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
	// Hint: Try converting each value to a Boolean.


// SOLUTION-1:
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}



// SOLUTION-2:
function bouncer(arr) {
  return arr.filter(Boolean);
}