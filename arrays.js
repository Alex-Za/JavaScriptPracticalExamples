"use strict"

// concat object like array
let arr = [1, 2];

let arrLike = {
    0: 3,
    1: 4,
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

// alert(arr.concat(arrLike));


// sort numeric arrays
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

let testArr = [1, 15, 2];

testArr.sort(compareNumeric);

// alert(testArr);

let arr2 = [1, 2, 3, 4, 5];

let result = arr2.reduce((sum, current) => sum + current, 0);

// alert(result);

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

let soldiers = users.filter(army.canJoin, army);

// soldiers.forEach(soldier => alert(soldier.age));

let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done:false, value: this.current++ };
                } else {
                    return { done: true};
                }
            }
        }
    }
};

for (let num of range) {
    alert(num);
}
