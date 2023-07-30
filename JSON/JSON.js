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

//*We’re going to run into trouble because when we try to extract pieceOfData out of the returned data, the function getData() will most likely still be fetching, so myData will not be the expected data, but will be undefined. Sad.
//*We need some way to solve this problem, and tell our code to wait until the data is done fetching to continue. Promises solve this issue.

const myData1 = getData() // if this is refactored to return a Promise...

myData.then(function(data){ // .then() tells it to wait until the promise is resolved
  const pieceOfData = data['whatever'] // and THEN run the function inside
})

//!Promises syntax
/*var p = new Promise(function(resolve, reject) {
	
	// Do an async task async task and then...

	if( good condition ) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function(result) { 
	 do something with the result
}).catch(function() {
	 error :(
}).finally(function() {
    executes regardless or success for failure
});*/

//!then
//*All promise instances get a then method which allows you to react to the promise.  The first then method callback receives the result given to it by the resolve() call.

new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(result) {
	console.log(result);
});

// From the console:
// 10

//*The then callback is triggered when the promise is resolved.  You can also chain then method callbacks:
new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});

// From the console:
// first then:  10
// second then:  20
// last then:  40

//!catch
//*The catch callback is executed when the promise is rejected:
new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { reject('Done!'); }, 3000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); });

// From the console:
// 'catch: Done!'

//*reject(Error('Data could not be found'))