"use strict"

let user = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert(JSON.stringify(descriptor, null, 2));


let user2 = {};

Object.defineProperty(user2, "name", {
    value: "John"
});

let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name');

// user2.name = "Alex"; can't set property

// alert(JSON.stringify(descriptor2, null, 2));


let user3 = {
    name: "John",
    toString() {
        return this.name;
    }
};

// for (let key in user3) { // toString will be output
//     alert(key);
// }

let user4 = {
    name: "John",
    toString() {
        return this.name;
    }
};

Object.defineProperty(user4, "toString", {
    enumerable: false
});

// for (let key in user4) { //toString will not be output
//     alert(key);
// }


let user5 = {};

Object.defineProperties(user5, {
    name: {value: "John", writable: false},
    surname: {value: "Smith", writable: false}
});


// cloning object with descriptor properties
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptor(user5));


Object.preventExtensions(user5); // prohibits adding new properties

Object.seal(user5); // prohibits adding/deleting properties

Object.freeze(user5); //prohibits adding/deleting/changing properties


function User(name, birthdate) {
    this.name = name;
    this.birthdate = birthdate;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthdate.getFullYear();
        }
    });
}

let john = new User("John", new Date(1992, 6, 1));

alert(john.birthdate);
alert(john.age);