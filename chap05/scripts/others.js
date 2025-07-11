// Grobal object
// isNaN
console.log(isNaN('Hoge'));         // true
console.log(Number.isNaN('Hoge'));  // false

// these are same
eval('console.log(2 * 3)');
window.eval('console.log(2 * 3)');
globalThis.eval('console.log(2 * 3)');

// JSON object
let data = `
{
    "isbn": "1234-5678",
    "title": "typescript",
    "price": "2948"
}
`
let obj = JSON.parse(data);
console.log(obj);
let str = JSON.stringify(obj);
console.log(str);

// parse date
let org = {
    published: new Date(2022, 5, 25),
};
let js = JSON.stringify(org);
console.log(js);
let obj1 = JSON.parse(js);
console.log(obj1);
// obj.published.getFullYear(); // cant call

let obj2 = JSON.parse(
    js,
    // if value is Date type, return Date object
    function(key, value) {
        if (typeof(value) == 'string'
        && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
        ) {
            return new Date(value);
        }
        return value;
    }
);
console.log(obj2);

// Symbol object
let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);
console.log(sym1.toString());
console.log(sym1.description);
console.log(sym1 === sym2);

console.log(typeof !!sym1); // can convert boolean

const MONDAY = Symbol();
const TUESDAY = Symbol();

let today = MONDAY;
if (today === TUESDAY) {
    console.log('Tuesday')
} else {
    console.log('Monday');
}
