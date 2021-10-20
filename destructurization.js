"use strict"

//destructurization complex objects

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

let {
    size: {
        width,
        height
    },
    items: [item1, item2],
    title = "Menu"
} = options;

// alert(title);
// alert(width);
// alert(height);
// alert(item1);
// alert(item2);

//destructurization in function

let options2 = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({title = "Untitled", width = 200, height = 100, items = []} = {}) {
    alert(`${title} ${width} ${height}`);
    alert(items);
}

// showMenu(options2);





