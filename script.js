"use strict"

function f(x) {
    alert(x);
}

function delay(func, ms) {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms);
    };
}

let test = delay(alert, 1000);

test("Test");


