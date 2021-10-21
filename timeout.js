"use strict"

//recursive setTimeout

let delay = 5000;

let timerId = setTimeout(function request() {

    if (false) {
        delay *= 2;
    }

    timerId = setTimeout(request, delay);
}, delay);


//timer

let i = 1;
setTimeout(function run() {
    func(i);
    setTimeout(run, 100);
}, 100);