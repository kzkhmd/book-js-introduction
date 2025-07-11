// length
let str1 = 'WINGSメンバー';
console.log(str1.length);

let str2 = '叱る';
console.log(str2.length);
console.log([...str2].length); // 文字列を配列に分解した上で長さを取得する

// toLowerCase & toUpperCase
let str3 = 'Wings';
console.log(str3.toLowerCase());
console.log(str3.toUpperCase());

// substring & charAt & slice
let msg = 'hELLo';
console.log(msg.substring(0, 1).toUpperCase() + msg.substring(1).toLowerCase());

let str4 = 'Project';
console.log(str4.charAt(5));
console.log(str4.substring(5));
console.log(str4.substring(5,7));
console.log(str4.slice(5));

console.log(str4.substring(5,7));
console.log(str4.slice(7,5));

console.log(str4.substring(5, -2));
console.log(str4.slice(5, -1));

// indexOf & lastIndexOf
let str5 = 'にわにはにわにわとりがいる';
console.log(str5.indexOf('にわ'));
console.log(str5.lastIndexOf('にわ'));

let count = 0;
let keywd = 'にわ';
let pos = str5.indexOf(keywd);

while (pos !== -1) {
    count++;
    pos = str5.indexOf(keywd, pos + keywd.length);
}
console.log(`${count}がヒットしました`);

// includes & startsWith & endsWith
console.log(str5.includes('にわ'));
console.log(str5.startsWith('にわ'));
console.log(str5.endsWith('にわ'));

// trim & trimStart & trimEnd
let str6 = '　 WINGSプロジェクト \n\t\n';
console.log(`${str6.trim()}`);
console.log(`${str6.trimStart()}`);
console.log(`${str6.trimEnd()}`);

// replace
console.log(str5.replace('にわ', '二羽'));
console.log(str5.replaceAll('にわ', '二羽'));

// split
let str7 = 'みかん\tりんご\tぶどう\t';
console.log(str7.split('\t'));

// padStart & padEnd
let str8 = '123.45';
console.log(str8.padStart(10));
console.log(str8.padStart(10,'0'));
console.log(str8.padEnd(10,'0'));

// repeat
let str9 = 'ハム';
console.log(str9.repeat(5));
console.log(str9.repeat(0));
// console.log(str9.repeat(-2)); // Error
