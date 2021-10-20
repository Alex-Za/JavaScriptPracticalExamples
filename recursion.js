"use strict"

//iterating over nested objects by recursion

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

// alert(sumSalaries(company));

let list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = { value: 4};

list = { value: 0, next: list };

// alert(JSON.stringify(list));


//formula for sum of numbers

function sumTo(n) {
    return n * (n + 1) / 2;
}

alert(sumTo(100));