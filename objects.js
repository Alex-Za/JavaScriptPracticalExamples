"use strict"

//doubled prices

let prices = {
    banana: 1,
    orange: 2,
    meat: 4
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

// sum of object properties

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(data) {
    return Object.values(data).reduce((a, b) => a + b, 0);
}

alert(sumSalaries(salaries));


