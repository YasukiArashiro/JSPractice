
'use strict';
console.log('Hello');
console.log('Hello');

console.log("it's me!");
console.log("it's me!");
console.log('it\'s me!');

console.log('hel\nlo wor\tld');
console.log('hello' + 'world');

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3); //10の３乗

console.log(2 + 10 * 3); //32
console.log((2 + 10) * 3); //36

// 定数 const

console.log(150 * 140);
console.log(150 * 160);

const Price = 150;

console.log(Price * 140);
console.log(Price * 160);

// 変数 let

let price = 170;

console.log(price * 140);
console.log(price * 160);

// 変数計算

// price = price + 100;
price += 100; //270

// price = price * 2;
price *= 2; //540

//price = price + 1;
//price += 1;

price++; //541

//price = price - 1;
//price -= 1;
price--; //540

console.log(price)


// データ型

console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);


//数字からなる文字列の計算

console.log('5' * 3);
console.log('5' - '3');

console.log('5' + 3);  // +の場合のみ文字列の連結になる。
                       // それ以外の演算子では数値の計算になる。
console.log(parseInt('5', 10) + 3); //計算をしたい場合は左の書き方。
                                    //parseInt('5', 10)で文字列の５を１０進数の整数値に変換する。
