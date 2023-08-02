async function getPersonsInfo(name) {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
}

//!The async keyword is what lets the JavaScript engine know that you are declaring an asynchronous function. 
//!This is required to use await inside any function. When a function is declared with async, 
//!it automatically returns a promise; returning in an async function is the same as resolving a promise. Likewise, throwing an error will reject the promise.

//!AWAIT

//*The await keyword is used to get a value from a function where you would normally use .then(). 
//*Instead of calling .then() after the asynchronous function, you would simply assign a variable to the result using await. 
//*Then you can use the result in your code as you would in your synchronous code.

//!ERRORS in async functions