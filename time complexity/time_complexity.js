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

//* Then the number of steps will vary depending on the input. In this case we cant measure the efficiency of the code

//*So what we really want to be able to measure is how the number of steps of our algorithm changes when the data changes. 
//*This helps us answer the question of whether the code we write will scale.
//!This is where the Big O notation is used
/*
1) Big O Notation - represents the upper bound of an algorithm. This means the worst-case scenario for how the algorithm will perform.
2) Omega Notation - represents the lower bound of an algorithm. This is the best-case scenario.
3) Theta Notation - represents both the upper bound and lower bound and therefore analyses the average case complexity of an algorithm.*/

//*Big O is not a piece of code you can put your algorithm into and it tells you how efficient it is. 
//*You will need to measure how the number of steps changes as the data grows, and using this you can apply a Big O Notation to it and measure it against other algorithms. 
//*In many cases you’ll be using a data structure in which the ways you interact with it are well known, 
//*and in that case it’s easier to judge how it will scale as the input changes.

//?Read about the Big O values