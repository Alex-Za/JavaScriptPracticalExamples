"use strict"

//stringify with a cyclical dependencies values path

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;

// alert(JSON.stringify(meetup, function replacer(key, value) {
//     alert(`${key}: ${value}`);
//     return (key === 'occupiedBy') ? undefined : value;
// }));


//implementation toJSON method

let room2 = {
    number: 23,
    toJSON() {
        return this.number;
    }
};

let meetup2 = {
    title: "Conference",
    room2
};

// alert(JSON.stringify(room2));
// alert(JSON.stringify(meetup2));

//converting JSON string to Date

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup3 = JSON.parse(str, function(key, value) {
    if (key === 'date') return new Date(value);
    return value;
});

alert(meetup3.date.getDate());
