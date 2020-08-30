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

}
