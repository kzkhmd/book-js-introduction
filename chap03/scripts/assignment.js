let x = 1;
let y = x;
x = 2;
console.log(y); // 1

let data1 = [0, 1, 2];
let data2 = data1;
data1[0] = 3;
console.log(data2[0]); // 3

let data3 = [0, 1, 2];
let data4 = data3;
data3 = [3, 4, 5];
console.log(data4); // [0, 1, 2]

// 定数は再代入できない
const TAX = 1.1;
// TAX = 1.2; // TypeError: Assignment to constant variable.

const data = [0, 1, 2];
// data = [3, 4, 5]; // TypeError: Assignment to constant variable.
data[0] = 3; // OK: dataの内容を変更

// 分割代入
let [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// 分割代入で左右の数が異なる場合
let [c, d, e] = [1, 2];
console.log(c); // 1
console.log(d); // 2
console.log(e); // undefined

// 分割代入で...で残りを取得
let [f, ...g] = [1, 2, 3, 4, 5];
console.log(f); // 1
console.log(g); // [2, 3, 4, 5]

// 分割代入で変数の値を入れ替える
let h = 1;
let i = 2;
[h, i] = [i, h];
console.log(h); // 2
console.log(i); // 1

// オブジェクトの分割代入
let book = {
    title: 'Javaポケットリファレンス',
    publisher: '技術評論社',
    price: 2680,
    other: {keywd: 'Java SE 18', logo:'logo.png'},
    rest1: 'rest1',
    rest2: 'rest2',

};

let {price, title:subject, publisher:company, other, other: {keywd}, ...rest} = book;
console.log(subject);
console.log(company);
console.log(price);
console.log(other);
console.log(keywd);
console.log(rest);
