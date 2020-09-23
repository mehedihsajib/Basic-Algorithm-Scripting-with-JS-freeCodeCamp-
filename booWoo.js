// PROBLEM: Boo who

// INSTRUCTION:
	// Check if a value is classified as a boolean primitive. Return true or false.
	// Boolean primitives are true and false.

// SOLUTION-1:
function booWho(bool) {
  if(typeof(boll) === "boolean") {
    return true;
  } else {
    return false;
  }
}

booWho(null);



// SOLUTION-2:
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
