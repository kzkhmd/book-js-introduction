// while
let i = 5;

while (i < 10) {
    console.log(`while: i is ${i}`);
    i++;
}

i = 10;
do {
    console.log(`do while: i is ${i}`);
    i++;
} while (i < 10);

// for
for (let i = 0; i < 5; i++) {
    console.log(`for: i is ${i}`);
}

// for in
let data = {
    apple: 150,
    orange: 100,
    banana: 120,
};

for (const key in data) {
    console.log(`${key} = ${data[key]}`);
}

// for of
let list = ['apple', 'orange', 'banana'];

for (const element of list) {
    console.log(`${element}`);
}

let books = [
    ['ゼロからわかるTypeScript入門', '技術評論社'],
    ['これからはじめるVue.js', 'SBクリエイティブ'],
    ['Bootstrap', '技術評論社'],
];

for (const [title, publisher] of books) {
    console.log(`${title} (${publisher})`);
}

list.forEach(
    function(value, index, array) {
        console.log(`forEach: ${value}`);
    }
)

// break
let j = 1;
let result = 0;

for (j = 1; j <= 100; j++) {
    result += j;
    if (result > 1000) { break; }
}

console.log(`合計値が1000を超えるのは${j}`);

// continue
result = 0;

for (j = 1; j < 100; j++) {
    if (j % 2 === 0) { continue; }
    result += j;
}

console.log(`合計: ${result}`);

// label
kuku:
for (i = 1; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        result = i * j;
        if (result > 30) { break kuku; }
        document.writeln(`${result} `);
    }
    document.writeln('<br />');
}

// try catch finally
i = 1;

try {
    i = i * k;
} catch(e) {
    console.log(`${e.name}: ${e.message}`);
} finally {
    console.log('process finished.');
}

// throw
let numerator = 1;
let denominator = 0;

try {
    if (denominator ==- 0) {
        throw new Error('devided by 0');
    }
    let result = numerator / denominator;
} catch(e) {
    console.log(e.message);
}

// debugger
let title = 'javascript nyuumon';
debugger;
console.log(title);
