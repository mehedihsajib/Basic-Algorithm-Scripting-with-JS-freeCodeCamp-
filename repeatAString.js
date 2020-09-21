// PROBLEM: Repeat a string

// INSTRUCTION:
	// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.


// SOLUTION:
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
 
repeatStringNumTimes("abc", 2);
