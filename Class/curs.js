//!CLASS in JS
//*In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for 
//*state (member variables) and implementations of behavior (member functions or methods).
class MyClass {
    // class methods
    constructor() { }
    method1() { }
    method2() { }
    method3() { }
}
//*Then use new MyClass() to create a new object with all the listed methods.
//*The constructor() method is called automatically by new, so we can initialize the object there.

//!What is a class?
//*In JavaScript, a class is a kind of function.
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// proof: User is a function
alert(typeof User); // function

//!What class User {... } construct really does is:
//?1)Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method(assumed empty if we don’t write such method).
//?2)Stores class methods, such as sayHi, in User.prototype.

//!Not just a syntactic sugar!!!
//?1)First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.
//?The language checks for that property in a variety of places.

//?2)Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
//?That’s good, because if we for..in over an object, we usually don’t want its class methods.

//?3)Classes always use strict. All code inside the class construct is automatically in strict mode.

//!Making bound methods with class fields
//*As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. It depends on the context of the call.
//*So if an object method is passed around and called in another context, this won’t be a reference to its object any more.
class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        alert(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined

//*The problem is called "losing this".
//*There are two approaches to fixing it, as discussed in the chapter Function binding:
//?1)Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
//?2)Bind the method to object, e.g. in the constructor.