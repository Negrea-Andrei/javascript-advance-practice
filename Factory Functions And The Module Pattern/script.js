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
 //Example
 let a = 17;

const func = x => {
  let a = x;
};

func(99);

console.log(a); //=> this will log 17. The reason is that the function does not update the a variable but creates a new variable inside the function that cant be accessed from
                //outside the function sooo it will refer again to the first 'a' variable

//Wednesday 24/05/2023 was not home

//Private Variables and Functions
const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction('taco');

//taco.printString => ----TACO---- because if i try to call taco.capitalizeString its going to give an error because that function are not returned
/*The reason is that the FactoryFunction does not return anything. 
It defines the capitalizeString and printString functions within its scope, but it does not explicitly return them or make them accessible outside of the function.

Since the FactoryFunction does not return anything, assigning the result to taco will result in taco being undefined. 
Therefore, attempting to call console.log(taco) or taco.printString would result in an error, as taco does not have any properties or methods.*/