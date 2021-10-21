"use strict"

//caching decorator

function slow(x) {
    for (let i = 0; i < 100000; i++) {
        for (let y = 0; y < 100000; y++) {

        }
    }
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);

alert(slow(1));
alert("Again: " + slow(1));


//caching decorator with context passing

let worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        return x * this.someMethod();
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow);

alert(worker.slow(2));
alert(worker.slow(2));

//caching decorator with context passing and many arguments

let worker = {
    slow(min, max) {
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments);

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return [].join.call(args);
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5));
alert("Again " + worker.slow(3, 5));
