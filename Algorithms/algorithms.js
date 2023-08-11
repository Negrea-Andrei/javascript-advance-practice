//!Recursion is the idea that a function calls itself. 
/*Pretty simple, right? It’s used to take a big problem and start breaking it down into smaller and smaller pieces
 and continuing to feed their solutions back into the original function until some sort of answer is achieved and the whole chain unwinds.*/

//?Iteration
function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
//!Recursive
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  