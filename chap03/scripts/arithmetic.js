// Add
console.log('Java' + 'Script'); // JavaScriptの文字列を連結して表示
console.log('10' + '1'); // 文字列として連結される
console.log(5 + '6'); // 文字列として連結される

let today = new Date(); // 現在の日付を取得
console.log(1234 + today); // 現在の日付を表示

// Subtract
console.log('Java' - 'Script');
console.log('10' - '1');
console.log(5 - '6');

let day = new Date(); // 現在の日付を取得
console.log(1234 - today);

// Increment
let i = 3;
let j = ++i;
console.log(i); // 4
console.log(j); // 4

let x = 3;
let y = x++;
console.log(x); // 4
console.log(y); // 3

// Float
console.log(0.2 * 3 + 0.1); // 0.7ではなく、0.7000000000000001と表示される

// 浮動小数点の精度の問題
let d1 = 0.14 * 100; // 14
let d2 = 0.28 * 100; // 28
console.log(d1); // 14
console.log(d2); // 28
console.log((d1 + d2) / 100);

// Decimal.jsを使って正確な計算を行う
let d3 = new Decimal('0.14');
let d4 = new Decimal('0.28');
console.log(d3.add(d4).toNumber());
