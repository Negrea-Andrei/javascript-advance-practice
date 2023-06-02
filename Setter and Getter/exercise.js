//Setter and Getter
//Accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.
//Example
let obj = {
    get propName() {
      // getter, the code executed on getting obj.propName
    },
  
    set propName(value) {
      // setter, the code executed on setting obj.propName = value
    }
  };
//The getter works when obj.propName is read.
//The setter works when obj.propName it is assigned.

//Getter
let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  console.log(user.fullName); // John Smith