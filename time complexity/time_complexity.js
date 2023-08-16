//*example to understand steps
function oddNumbersLessThanTen() {
  let currentNumber = 1;

  while (currentNumber < 10) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;
  }
}
/*
1)We assign the number 1 to a variable. That’s one step.

1) We have a loop. For each iteration of the loop, we do the following:
  1) Compare currentNumber to see if it is less than 10. That is 1 step.
  2) We then check if currentNumber is odd. That is 1 step.
  3) If it is then we output it to the terminal. That’s 1 step every 2 iterations.
  4) We increase currentNumber by 1. That is 1 step.
  //*27steps + 5 steps

3) To exit the loop, we need to compare currentNumber one last time to see that it is not less than ten any more. That is one last step.*/
/*27 + 5 + 1 +1 = 34*/

//* If we change the function in this way

function oddNumbersLessThanTen(maxNumber) {
  let currentNumber = 1;

  while (currentNumber < maxNumber) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;
  }
}

//* Then the number of steps will vary depending on the input