//!JSON (JavaScript Object Notation) is a standardized format for structuring data. It is heavily based on the syntax for JavaScript objects.
//!It is commonly used for transmitting data in web applications

//*Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.

//!JSON structure

/*parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.*/

//! Asynchronous Code

//?Callbacks

//*A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

//?Promises

//*a promise is an object that might produce a value at some point in the future.
/*Example*/
const getData = function() {
    // go fetch data from some API...
    // clean it up a bit and return it as an object:
    return data
  }

//*The issue with this example is that it takes some time to fetch the data, but unless we tell our code that, it assumes that everything in the function happens essentially instantly.

const myData = getData()
const pieceOfData = myData['whatever']