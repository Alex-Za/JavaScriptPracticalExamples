"use strict"

//usage example WeakMap

let visitsCountMap = new WeakMap();

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let john = {name: "John"};

countUser(john);

john = null;

//cache using WeakMap

let cache = new WeakMap();

function process(obj) {
    if (!cache.has(obj)) {
        let result = obj;

        cache.set(obj, result);
    }
    return cache.get(obj);
}

let obj = {test: "test"};

let result = process(obj);
let result2 = process(obj);

obj = null;
