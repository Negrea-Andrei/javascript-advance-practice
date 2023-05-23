/*Example factory function*/
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const jeff = personFactory('jeff', 27);
  
  console.log(jeff.name); // 'jeff'
  
  jeff.sayHello(); // calls the function and logs 'hello!'

  /*Compare to a object constructor*/
  const Person = function(name, age) {
    this.sayHello = () => console.log('hello!');
    this.name = name;
    this.age = age;
  };
  
  const jen = new Person('jen', 27);
  //Note that factory functions do not utilize the prototype, which does come with a performance penalty.

  /*Object Shorthand*/
  /*!!!!!!old version */ //return {name: name, age: age, sayHello: sayHello};
  /*!!!!!!new version*/ //return {name, age, sayHello};