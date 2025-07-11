// Object
let date = new Date(2025, 7, 1, 19, 0, 0);
console.log(date);

// Null check
let str = null;
if (str !== null && str !== undefined) {
    console.log(str.length);
}

console.log(str?.length);

// Static property & method
const EPSILON = 0.0001;
let x = 3;
let y = 4;
console.log(Math.abs(x - y) < EPSILON);
