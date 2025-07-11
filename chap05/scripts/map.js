let data = new Map([
    ['1st', 'first'],
    ['2nd', 'second'],
    ['3rd', 'third'],
]);
console.log(data);
console.log(data.size);

let data1 = new Map();
data1.set('イチ', '1')
    .set('二', '2')
    .set('サン', '3');

console.log(data1.get('イチ'));
console.log(data1.get('二'));
console.log(data1.get('サン'));

// Map uses ===
data1.set('ヨン', '4');
console.log(data1.get(4));

// reference type key cannot work
data1.set([], '5');
console.log(data1.get([]));

// NaN
let data2 = new Map();
data.set(NaN, 'NaN');
console.log(data.get(NaN));

// delete
console.log(data1.delete('イチ'));
console.log(data1.delete('ゴ'));

// clear
// console.log(data1.clear());

// for
for (const key of data1.keys()) {
    console.log(key);
}

// forEach
data1.forEach(
    function(value, key) {
        console.log(`${key} : ${value}`);
    }
)

// Object <-> Map
console.log(Object.fromEntries(data1));

let obj = {
    '1st': 'first',
    '2nd': 'second',
    '3rd': 'third',
};
let map = new Map(Object.entries(obj));
console.log(map);

// WeakMap
let obj1 = {};
let data3 = new Map();
data3.set(obj1, 'Hoge');
obj1 = null;
console.log(data3); // obj1 is alive

let obj2 = {};
let data4 = new WeakMap();
data4.set(obj2, 'fuga');
obj2 = null;
console.log(data4);
