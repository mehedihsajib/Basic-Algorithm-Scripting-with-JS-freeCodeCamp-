// PROBLEM: Confirm the ending

// INSTRUCTION:
	// Check if a string (first argument, str) ends with the given target string (second argument, target).


// SOLUTION:
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");