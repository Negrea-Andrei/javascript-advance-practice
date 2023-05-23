/*Example factory function*/
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

/*Compare to a object constructor*/
const Person = function (name, age) {
    this.sayHello = () => console.log('hello!');
    this.name = name;
    this.age = age;
};

const jen = new Person('jen', 27);
//Note that factory functions do not utilize the prototype, which does come with a performance penalty.

/*Object Shorthand*/
/*!!!!!!old version */ //return {name: name, age: age, sayHello: sayHello};
/*!!!!!!new version*/ //return {name, age, sayHello};

//Example
const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food); // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({ name, color, number, food });
 // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }
 //Scope and Closure