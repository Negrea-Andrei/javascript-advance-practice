/*Reminder: objects are form using {} */

/*The best practice is to use object literal to create objects */
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff!
  }
}

console.log("hello");

/*to get information you can use dot notation and bracket notation. */

console.log(myObject.property);

console.log(myObject["otherProperty"]);

/* OBJECTS ARE A GOOD WAY TO ORGANIZE AND GROUP PIECES OF CODE THAT ARE RELATED */
/* example without objects */

const playerOneName = "tim"
const playerTwoName = "jen"
const playerOneMarker = "X"
const playerTwoMarker = "O"

/* example with objects */
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jen",
  marker: "O"
}

/*Object Constructors!!!!!!!!!*/
/*the syntax needed*/
function Player(name, marker) {
  this.name = name
  this.marker = marker
}

/*you use by calling the function with the keyword new */
const player = new Player('steve', 'X')
console.log(player.name) // 'steve'

/*REMEMBER: objects can hold functions also */
/*!!!!!!!!!!!!!*/
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'

/*EXERCISE */

function Book (title, author, pages ,read,) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, read: ${read}`
  }
}

const test = new Book('a', 'b', 20, 'yes')
console.log(test.info())

/*PROTOTYPES*/
/*Before we go much further, there’s something important you need to understand about JavaScript objects. All objects in JavaScript have a prototype. 
Stated simply, the prototype is another object that the original object inherits from, 
which is to say, the original object has access to all of its prototype’s methods and properties.*/

/*1)All objects in JavaScript have a prototype*/
/*2)Prototype is another object*/
/*3)The original object has access to all of its prototype’s methods and properties*/

/*Accessing an object’s prototype*/
/*Object.getPrototypeOf() => returns the prototype of the object*/
/*.prototype => contains the methods and properties of the object constructor prototype*/
Object.getPrototypeOf(player1) === Player.prototype /* => true */
Object.getPrototypeOf(player2) === Player.prototype /* => true */

Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
} /*=> the prototype stores a function*/
  /*when an object calls .sayHello it will consol log "Hello, I'm a player"*/

  /*Object.getPrototypeOf() vs. .proto vs. [[Prototype]]*/

/*Use Object.getPrototypeOf() not .proto vs. [[Prototype]]*/
/*.proto vs. [[Prototype]] is an old way o get the prototype*/


/*Prototypal Inheritance*/