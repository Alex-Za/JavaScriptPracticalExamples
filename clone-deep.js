"use strict"

let user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50,
        other: {
            otherHeight: 120,
            otherWidth: 60
        }
    }
};

let clone = cloneDeep(user);

function cloneDeep(object) {
    let newObj = {};

    for (let key in object) {
        if (user[key] === 'object') {
            newObj[key] = cloneDeep(user[key]);
        } else {
            newObj[key] = user[key];
        }
    }

    return newObj;
}

console.log(clone);