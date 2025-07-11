let data = new Set([10, 5, 100, 10, 50]);
console.log(data);
console.log([...data]); // set to array

let data1 = new Set([NaN, NaN]);
console.log(data1.size);

let data2 = new Set([[], []]);
console.log(data2.size); // array is different objects

// add delete clear
let data3 = new Set();
data3.add('1')
    .add('2')
    .add('3');

console.log(data3);
console.log(data3.delete('2'));
console.log(data3);
data3.clear();
console.log(data3);

// has
data3.add('1');
console.log(data3.has('1'));
console.log(data3.has('2'));

// forEach
data3.forEach(
    function(value, key, set) {
        console.log(value);
    }
)
