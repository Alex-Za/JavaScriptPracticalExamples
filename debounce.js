"use strict"

function debounce(f, ms) {
    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };
}

let f = debounce(alert, 1000);

setTimeout(() => f(3), 100);
setTimeout(() => f(3), 900);
setTimeout(() => f(5), 2500);