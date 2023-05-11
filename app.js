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