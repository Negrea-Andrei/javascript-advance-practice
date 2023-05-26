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

//CLOSURE
//The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope. 
//In this case, printString has access to everything inside of FactoryFunction, even if it gets called outside of that function.

const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3

//Private functions are functions that are used in the workings of our objects that are not intended to be used elsewhere in our program. 
//In other words, even though our objects might only do one or two things, we are free to split our functions up as much as we want and only export the functions that the rest of the program is going to use.

//EXAMPLE OF HOW TO USE AN OBJECT
const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName  = () => name;
  const die = () => {
    // uh oh
  };
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return {attack, damage, getLevel, getName};
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);