window.firstName= 'Jack';
const person=  {
    firstName: 'Jill',
    fullName: function() {
        return `${this.firstName}`
    }
}
//!Arrow functions do not have the 'this' value but they inherit it from the parent (in this case the window)
//!Function declarations have their own 'this' value 
const person2=  {
    firstName: 'Jill',
    fullName: () => {
        return `${this.firstName}`
    }
}

console.log(person.fullName())
console.log(person2.fullName())

//!A normal function can be called before it is declared but arrow can only be access after it was declared

//!Arrow function have an implicit return (you don't have to put 'return' to return something)