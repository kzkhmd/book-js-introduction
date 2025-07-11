// Integer
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2); // 不正

// BigInt
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);
// console.log(2n + 10); // TypeError
console.log(10n / 3n); // 小数点以下は切り捨て
console.log(10 / 3);
console.log(10n === 10);
console.log(10n == 10);

// to
let num1 = 255;
console.log(num1.toString(16));
console.log(num1.toString(8));

let num2 = 123.45678;
console.log(num2.toExponential(2));
console.log(num2.toFixed(3));
console.log(num2.toFixed(7));
console.log(num2.toPrecision(10));
console.log(num2.toPrecision(6));

// number format
let num3 = 1234.567;
let fmt = new Intl.NumberFormat(
    'ja-JP',
    {
        style: 'currency',
        currency: 'JPY',
        currencyDisplay: 'symbol'
    }
);
console.log(fmt.format(num3));

// parse
let num4 = '123xxx';
console.log(Number(num4));
console.log(Number.parseFloat(num4));
console.log(Number.parseInt(num4));

// math
console.log(Math.abs(-100));

// random
let min = 50;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
