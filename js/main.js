
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


// 比較演算子

console.log(price > 1000);
console.log(price < 1000);
console.log(price >= 1000);
console.log(price <= 1000);
console.log(price === 1000);
console.log(price !== 1000);


// 条件分岐

const score = 85;

if(score >= 80) {
	console.log('Great!');
} else if (score >= 60) {
	console.log('Good.');
} else {
	console.log('OK...');
}


// 条件演算子

// 条件式 ? trueの処理 : falseの処理

score >= 80 ? console.log('Great!!') : console.log('OK....');


//論理演算式

const name =  'taguchi'

if (score >=50) {
	if (name === 'taguchi') {
		console.log('Good job!');
	}
}

/// %% なおかつ (AND)
/// || もしくは (OR)
/// !  〜ではない(NOT)

// 論理演算子を使用して書くと...
if (score >= 50 && name === 'taguchi') {
	console.log('good job!');
}

// 条件分岐

const signal = 'blue';

if(signal === 'red') {
	console.log('stop!');
} else if (signal === 'yellow') {
	console.log('Caution!');
} else if (signal === 'blue') {
	console.log('Go!');
}


switch (signal) {
	case 'red':
		console.log('Stop!');
		break;
	case 'yellow':
		console.log('Caution!');
		break;
	case 'blue':
		console.log('Go!');
		break;
}

// for文

for (let i = 1; i <= 10; i++) {
	console.log(`hello ${i}`);
}

//while文

let hp = 100;

while (hp > 0) {
	console.log(`${hp} HP left!`);
	hp -= 15;
}

// do..while

let mp = -50;

do {
	console.log(`${mp} MP left!`);
	mp -= 15;
} while (mp > 0);
// ↑最低でも１回はdoの処理が行われ、whileの条件がtrueならもう一回同じ処理を繰り返す。



// continue break文

for (let i = 1; i <= 15; i++) {
	if (i % 3 === 0) {
		continue;  //iが3の倍数の時だけ処理をスキップする
	}
	if (i === 14) {
		break;  //iが14になったらループ処理を終了する
	}
	console.log(i);
}


//関数で処理をまとめる

console.log('----------------');
console.log('-------Ad-------');
console.log('----------------');
console.log('Tom is great');
console.log('----------------');
console.log('-------Ad-------');
console.log('----------------');
console.log('bob is great');
console.log('----------------');
console.log('-------Ad-------');
console.log('----------------');
console.log('steave is great');
console.log('----------------');
console.log('-------Ad-------');
console.log('----------------');
console.log('richard is great');

//　　↑を関数でまとめると

function showAd() {
	console.log('----------------');
	console.log('-------Ad-------');
	console.log('----------------');
}

showAd();
console.log('Tom is great');
showAd();
console.log('bob is great');
showAd();
console.log('steave is great');
showAd();
console.log('richard is great');

// 引数

console.log('--------引数------------')

function ShowAd(message = 'Adddddd') { //仮引数  引数を渡さないとAddddddで実行される
	console.log('--------------------');
	console.log(`-----${message}-----`);
	console.log('--------------------');

}

ShowAd('Header Ad'); //実引数
console.log('Tom is great');
console.log('bob is great');
ShowAd('Ad');
console.log('steave is great');
console.log('richard is great');
ShowAd('Footer Ad');
console.log('↓引数なしで実行');
ShowAd();

// return

function sum(a, b, c) {
	console.log(a + b+ c);
}

sum(1, 2, 3);
sum(3, 4, 5);



function Sum(a, b, c) {
	return a + b +c;
}

const total = Sum(1, 2, 3) + Sum(3, 4, 5);
console.log(total);


// 関数宣言　まとめ
//
// ↓関数宣言
// const 定数名 = function(仮引数, 仮引数, ...) {
//  処理;
//  処理;
//  return 返り値;
// }
//
// ↓呼び出し
// 関数名(実引数, 実引数, ...);
//
//-----------------------------------------------
// 関数式という書き方の場合
//
// ↓関数式         ↓関数名がないので「無名関数」と呼ばれる
// const 定数名 = function(仮引数, 仮引数, ...) {
//  処理;
//  処理;
//  return 返り値;
// };  ←変数に代入するような式の場合は文末に;(セミコロン)が必要なので注意!
//
// ↓呼び出し
// 定数名(実引数, 実引数, ...);


const SUM = function(a, b,c) {
	return a + b + c;
}; //代入しているので;(セミコロン)をつける

const TOTAL = SUM(1, 2, 3) + SUM(3, 4, 5);
console.log(TOTAL);


// アロー関数

// const SuM = function(a, b,c) {
// 	return a + b + c;
// };
// ↑と↓は同じ意味
const SuM = (a, b,c) => a + b + c;


// const double = function(a) {
// 	return a * 2;
// };
// ↑と↓は同じ意味
const double = a => a * 2;

console.log(double(12));


