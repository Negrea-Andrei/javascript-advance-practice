//!Setter and Getter
//*Accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.
//?Example
let obj = {
    get propName() {
        // getter, the code executed on getting obj.propName
    },

    set propName(value) {
        // setter, the code executed on setting obj.propName = value
    }
};
//*The getter works when obj.propName is read.
//*The setter works when obj.propName it is assigned.

//!Getter
let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(user.fullName); // John Smith

//!Setter
let player = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};
console.log(player.name); // John
console.log(player.surname); // Smith

// set fullName is executed with the given value.
player.fullName = "Alice Cooper";

console.log(player.name); // Alice
console.log(player.surname); // Cooper

// set fullName is executed with the given value.
console.log(player.fullName) = "Alice Cooper";

//!Accessor descriptors
//*For instance, to create an accessor fullName with defineProperty, we can pass a descriptor with get and set:
let example = {
    name: "John",
    surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(example.fullName); // John Smith

for (let key in example) console.log(key); // name, surname
//!Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.

