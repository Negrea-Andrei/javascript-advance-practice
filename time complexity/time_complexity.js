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
/*the values of Big O
O(1) - Constant Complexity
O(log N) - Logarithmic Complexity
O(N) - Linear Complexity
O(N log N) - N x log N Complexity
O(n²) - Quadratic Complexity
O(n³) - Cubic Complexity
O(2ⁿ) - Exponential Complexity
O(N!) - Factorial Complexity*/

//*O(1) is constant time. meaning it takes the same amount of steps no matter the amount of data

//*O(log N) is logarithmic time.
/*Logarithmic Complexity tells us that the numbers of steps an algorithm takes increases by 1 as the data doubles. 
That’s still pretty efficient when you think about it. 
Going from 5,000 to 10,000 data elements and only taking one additional step can scale really well.*/

//*O(N) - Linear complexity
/*This one is pretty easy to wrap your head around. 
Linear Complexity just tells us that as the number of items grows, the number of steps grows at exactly the same rate. 
Every time you iterate over an array is an example of Linear Complexity.*/

//*O(N log N) - N x log N complexity
/*You can’t say this one isn’t appropriately named. 
This notation usually implies we have an algorithm which initially is O(log N) such as our example earlier of 
Binary Search where it repeatedly breaks an array in half, but with O(N log N) each of 
those array halves is processed by another algorithm with a complexity of O(N).*/

//*O(n²) - Quadratic complexity
/*You’ve probably written code with a Quadratic Complexity on your programming journey. 
It’s commonly seen when you loop over a data set and within each loop you loop over it again.*/

//*O(n³) - Cubic complexity
/*Think triple nested loops baby. If looping over an array with n items, 1 extra item adds an extra outer loop, 
an extra middle loop, and an extra innermost loop. 
When using such triply nested loops on an array of size n, we require a total of n³ sub-steps.*/

//*O(2ⁿ) - Exponential complexity
/*Exponential Complexity means that with each item added to the data size, the number of steps doubles from the previous number of steps.*/

//*O(N!) - Factorial complexity
/*A factorial is the product of the sequence of n integers. 
The factorial of 4(4!) is 4 * 3 * 2 * 1.*/