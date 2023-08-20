//!What do we mean by space complexity?
/*Space complexity can be considered to be the total space used by an algorithm relative to the size of the input. 
Thinking back to the previous lesson, you’ll recall that we don’t consider the efficiency of an algorithm in how it performs in one 
specific instance of that algorithm running. Instead, we want to know how the efficiency changes when the size of the input changes.

Measuring space complexity considers the space used by your algorithm input and auxiliary space. 
Auxiliary space is the extra space used by the algorithm. 
These can be things like temporary variables created during the execution of the algorithm. 
They won’t have a lasting impact on memory space but during the execution of the algorithm will need to be considered. 
Therefore, you can consider the space complexity to be the total amount of working memory our algorithm needs.*/

//!The importance of considering space complexity
/*although memory is cheap, your hardware will usually have a fixed amount. 
You can’t expand memory easily on the fly in most scenarios. 
When the problem is one of time, you can just allow the program to run for longer and it will eventually come back with a result. 
You can’t do this with space.*/

//*Measuring the space complexity
/*The good news is that we measure space complexity in exactly the same way as time complexity. 
You already learned about Big O in the last lesson, so you already know how to measure the efficiency of your code. 
The difference is that you’ll need to think about how your algorithm is utilizing memory rather than time.*/