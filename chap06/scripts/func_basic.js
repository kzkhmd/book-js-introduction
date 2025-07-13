// Basic
function getTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        return;
    }
    return base * height / 2;
}

let area = getTriangleArea(10, 0);
console.log(area);

// Constructor
let getTriangleArea2 = new Function(
    'base',
    'height',
    'return base * height / 2;'
);
console.log(getTriangleArea2(10, 4));

let getTriangleArea3 = function(base, height) {
    return base * height / 2;
};
console.log(getTriangleArea3(10, 4));

let getTriangleArea4 = (base, height) => {
    return base * height / 2;
}
console.log(getTriangleArea4(10, 4));

// Scope
function checkScope() {
    let scope = 'blockScope';
    return scope;
}
console.log(checkScope());
// console.log(scope);  // Error

// Argument
function getTriangleArea5(base = 10, height=5) {
    return base * height / 2;
}
console.log(getTriangleArea5());
console.log(getTriangleArea5(4));
console.log(getTriangleArea5(1, 2));

function sum(...nums) {
    let result = 0;
    for (const num of nums) {
        if (typeof num !== 'number') {
            throw new Error('Num is not number type: ${num}');
        }
        result += num;
    }
    return result;
}
console.log(sum(1, 3, 5, 7, 9));
console.log(sum(...[1, 3, 5, 7, 9]));

// Named argument
function showDialog({
    content = '',
    title = 'my dialog',
    width = 100,
    height = 100,
    position = 'center',
    modal = false
}) {
    console.log(`title: ${title}`);
}
showDialog({content: 'this is dialog',title: 'hello my dialog'});

// Returns
function getMaxMin(...nums) {
    return [Math.max(...nums), Math.min(...nums)];
}
let result = getMaxMin(10, 35, -5, 78, 0);
console.log(result);

let [max, min] = getMaxMin(10, 35, -5, 78, 0);
console.log(max);
console.log(min);

function factorial(n) {
    if (n != 0) {
        return n * factorial(n - 1);
    }
    return 1;
}
console.log(factorial(5));

function arrayWalk(data, callback) {
    for (const [key, value] of data.entries()) {
        callback(value, key);
    }
}

function showElement(value, key) {
    console.log(`${key} : ${value}`);
}

let list = [1, 2, 3, 4];
arrayWalk(list, showElement);

let result1 = 0;
function sumElement(value, key) {
    result1 += value;
}

arrayWalk(list, sumElement);
console.log(result1);
