// 比較演算子
console.log(1 == true);

// 参照型の比較
let data1 = ['javascirpt', 'ajax', 'asp.net'];
let data2 = ['javascirpt', 'ajax', 'asp.net'];
console.log(data1 == data2);

// 厳格な等価演算子
console.log('1' == 1); // true
console.log('1' === 1); // false

// 少数点数の比較
const EPSILON = 0.0001; // 許容誤差
let x = 0.98765;
let y = 0.98764;
console.log(Math.abs(x - y) < EPSILON); // 許容誤差の範囲内であれば等価であると判定

// 条件演算子
let score = 80;
console.log(score >= 70 ? '合格' : '不合格');

let value = '';
value = value ? value : '規定値';
console.log(value);

value = '';
value ||= '規定値2';
console.log(value);

value = null;
value ??= '規定値3';
console.log(value);
console.log(value ?? '規定値4');

// ショートカット演算
let num = 1;
if (num === 1) {
    console.log('hello');
}
num === 1 && console.log('hello, world');

// ビット演算
let bit1 = 0b0110;
let bit2 = 0b0011;
console.log(bit1 & bit2); // and
console.log(bit1 | bit2); // or
console.log(~bit1); // not

// ビットシフト
let bit3 = - 0b1001;
console.log(bit3);
console.log(bit3 >> 1);
console.log(bit3 >>> 1);

// ビットフィールド
const AMERICA = 1 << 0;
const RUSSIA  = 1 << 1;
const CHINA   = 1 << 2;
const INDIA   = 1 << 3;

let flags = AMERICA | CHINA;
console.log(flags & INDIA);
console.log((flags & (AMERICA | CHINA)) === (AMERICA | CHINA));

// delete
let data = ['python', 'php', 'javascript'];
console.log(delete data[0]);
console.log(data);
console.log(data.length);

let langs = {primary: 'japanese', secondary:'english'};
console.log(delete langs.secondary);
console.log(langs);
console.log(delete langs.hoge);

// typeof
let number = 1;
console.log(typeof number);

let date = new Date();
console.log(typeof date);
