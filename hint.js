"use strict"

let user = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// alert(user);
// alert(+user);
// alert(user + 500);

let user2 = {
    name: "John",
    money: 1000,
    toString() {
        return `{name: "${this.name}"}`;
    },
    valueOf() {
        return this.money;
    }
};

alert(user2);
alert(+user2);
alert(user2 + 500);