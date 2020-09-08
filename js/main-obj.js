'use strict';

{
	// const score1 = 80;
	// const score2 = 90;
	// const score3 = 40;

	const scores = [80, 90, 40];
	console.log(scores);

	console.log('↓配列のインデックスが１番目の値を表示')
	console.log(scores[1]);

	console.log('配列の値を変更する')
	scores[2] = 44;
	console.log('scores[2] = 44; で変更後の配列↓')
	console.log(scores);

	console.log('このようにconstで指定しても配列なら代入可能')

	console.log('↓console.log(scores.length); を使って配列の要素の数を表示')
	console.log(scores.length);


//配列とループ

	console.log(`Score: ${scores[0]}`);
	console.log(`Score: ${scores[1]}`);
	console.log(`Score: ${scores[2]}`);

	for (let i = 0; i < scores.length; i++) {
		console.log(`Score ${i}: ${scores[i]}`);
	}

//配列の要素の変更

	scores.push(60, 50); //配列scoresの末尾に要素60と50を追加
	scores.shift();  //配列の先頭の要素を削除　今回は80が消える
					 //先頭の１個しか消せないので()の中身は何か書く必要はない
	console.log(scores);

// splice();

// splice(変化が開始する位置、削除数、追加する要素...); で記述する

	const Scores = [80, 90, 40, 70];
	Scores.splice(1, 1, 40, 50);  //配列Scoresのインデックスが１番目の90から変更点を設定し,
　　//(変更点, 削除数, 追加する要素, 追加する要素)　　　　　　         変更点から１個の要素を消す。そして変更点から要素４０と５０を追加する。

	for (let i = 0; i < Scores.length; i++) {
		console.log(`Score ${i}: ${Scores[i]}`);
	}


//スプレッド構文
	const otherScores = [10, 20];  //↓この...がスプレッド構文
	const ScoreS = [80, 90, 40, 70, ...otherScores];
	console.log(ScoreS);

	function sum(a, b) {
		console.log(a + b);
	}

	sum(...otherScores);
	//sum(10, 20);

//分割代入

	const array = [80, 90, 40, 70];

	const [a, b, c, d] = array;

	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);

	// ↓この ... はレスト構文と呼ばれていて、このように分割代入と一緒に使うと、
	// 　　こちらで割り当てた以外の要素をここで指定した名前の配列に格納してくれます。
	const [e ,f, ...others] = array;
	console.log(e);
	console.log(f);
	console.log(others);


	//2つの値の交換もできる
	let x = 30;
	let y = 70;
	[x, y] = [y, x]
	console.log(x);
	console.log(y);

//for Each();


	//配列arrayの要素を一個ずつ代入して実行していくEach文
	array.forEach((array) => {
		console.log(`Score: ${array}`);
	});

	//配列のインデックスも表示したい場合はこのように書ける
	array.forEach((array, index) => {
		console.log(`Score ${index}: ${array}`);
	});

//map()

	const prices = [180, 190, 200];

	// const updatedPrices = prices.map((price) => {
	// 	return price + 20;
	// });

	const updatedPrices = prices.map(price => price + 20);
	//このように省略して書くこともできる

	console.log(updatedPrices);

//filter()

	const numbers =[1, 4, 7, 8, 10];
	//↑の偶数の要素だけを配列として抽出したい！

	// const evenNumbers = numbers.filter(number => {
	// 	if (number % 2 === 0) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// });

	const evenNumbers = numbers.filter(number => number % 2 === 0);
	//このように省略して書くこともできる

	console.log(evenNumbers);

//オブジェクト

	// const point = [100, 180];
	// const point = {x: 100, y:180};
	const point = {
		x: 100, // ←これをプロパティ（メンバー）と呼ぶ。 xのことは名前（キー）と呼び、100のことは値と呼ぶ。
 		y: 180,
	};

	console.log(point);

//プロパティ

	point.x = 120;
	// point['x'] = 120;

	console.log(point.x);
	console.log(point['y']);

}
