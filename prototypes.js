"use strict"

let animal = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

rabbit.sleep();

// alert(rabbit.isSleeping);
// alert(animal.isSleeping);

let animal2 = {
    eats: true
};

let rabbit2 = {
    jumps: true,
    __proto__: animal2
};

alert(Object.keys(rabbit2)); // jumps

for (let prop in rabbit2) { // jumps, eats
    // alert(prop);
}

for (let prop in rabbit2) {
    let isOwn = rabbit2.hasOwnProperty(prop);

    if (isOwn) {
        alert(`Our: ${prop}`);
    } else {
        alert(`Inherited: ${prop}`);
    }
}

let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");

// alert(rabbit.eats);


function Rabbit2(name) {
    this.name = name;
    alert(name);
}

let rabbit11 = new Rabbit2("White Rabbit");

let rabbit22 = new rabbit11.constructor("Black Rabbit");


let animal3 = {
    eats: true
};

let rabbit3 = Object.create(animal3); //added proto to object

console.log(Object.getPrototypeOf(rabbit3) === animal3);

Object.setPrototypeOf(rabbit3, {});

let clone = Object.create(Object.getPrototypeOf(animal3), Object.getOwnPropertyDescriptor(animal3));


let obj = Object.create(null); //simplest object with proto = null

obj.hello = "One";
obj.bye = "Two";
alert(Object.keys(obj));