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


}
