// array
let list0 = ['a', 'b', 'c'];
let list1 = new Array();
let list2 = new Array(10); // fixed size

// push, pop, unshift, shift
list0.push('d');
list0.unshift('y','z');
console.log(list0);
console.log(list0[0]);
console.log(list0.at(-1));
console.log(list0.pop());
console.log(list0.shift());
console.log(list0.shift());
console.log(list0);

// concat
list0 = list0.concat(['e', 'f']);
console.log(list0);

// splice
console.log(list0.splice(2, 2, 'X', 'Y', 'Z'));
console.log(list0);
console.log(list0.splice(2, 0, 'V', 'W'));
console.log(list0);
console.log(list0.splice(2, 5));
console.log(list0);

// slice
console.log(list0.slice(1, 3));

// indexOf, lastIndexOf
let list3 = [1, 2, 3, 4, 5, 4];
console.log(list3.indexOf(3));
console.log(list3.indexOf('3'));
console.log(list3.lastIndexOf(4));

// forEach
let result = [];
list3.forEach(
    function(v, i) {
        if (v === 4) {
            result.push(i);
        } 
    }
);
console.log(result);

// include
console.log(list3.includes(2));
console.log(list3.includes(10));

// flat
let list4 = [1, [2, 3, [4, 5, [6, 7]]]];
console.log(list4.flat());
console.log(list4.flat(2));
console.log(list4.flat(Infinity));

// length
console.log(list4.length);
console.log(list4.flat(Infinity).length);

// join
let lsit5 = ['a', 'b', 'c', 'd'];
console.log(lsit5.join());
console.log(lsit5.join('/'));
console.log(lsit5.join('\t'));

// copyWithin
console.log(lsit5.copyWithin(2, 1, 3));

// from
let opts = Array.from(document.querySelector('#food').options);
opts.forEach(
    function(opt) {
        console.log(opt.value);
    }
);

// init
let data = new Array(5);
data.fill('x', 0, data.length);
console.log(data);

// from is copy
let copy = Array.from(data);
console.log(data === copy);

// sort
let list6 = ['a', 'c', 'e', 'x', 'b'];
console.log(list6.sort());

let list7 = [1, 10, 7, 2, 100, 3];
console.log(list7.sort()); // cannot correct sort
console.log(
    list7.sort(
        function(m, n) {
            return m - n;
        }
    )
);

// forEach
let list8 = [1, 2, null, 4, 5];
let result1 = [];
try {
    list8.forEach(
        function(value) {
            if (value !== null) {
                this.push(value);
            }
        },
        result1
    );
    console.log(result1);
} catch (e) {
    console.log(e.message);
}

// map
let result2 = list8.map(
    function(value, index, array) {
        if (value === null) {
            return value;
        }
        return value * value;
    }
);
console.log(result2);

// flatMap
console.log(
    list8.flatMap(
        function(value, index, array) {
            if (value === null) {
                return [];
            }
            return [value * 2, value ** 2];
        }
    )
)

// find
let books = [
    {title: 'WebAssembly', price: 4000},
    {title: 'TypeScript', price: 2948},
    {title: 'JavaScirpt', price: 1980},
    {title: 'Python', price: 980},
];
console.log(
    books.find(
        function(value) {
            return value.title.startsWith('Java');
        }
    )
)
console.log(
    books.findIndex(
        function(value) {
            return value.title.startsWith('Java');
        }
    )
)

// some every
console.log(
    books.some(
        function(value) {
            return value.price < 3000;
        }
    )
)
console.log(
    books.every(
        function(value) {
            return value.price < 3000;
        }
    )
)

// filter
console.log(
    books.filter(
        function(value) {
            return value.price < 1000;
        }
    )
)

// reduce
let num = [4, 2, 8, 3];
console.log(
    num.reduce(
        function(result, value, index, array) {
            return result * value;
        }
    )
)
