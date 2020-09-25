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

	point.x = 120;  //プロパテゥのxを120に変更する
	// point['x'] = 120;

	console.log(point.x);     //プロパティにアクセスするには←の記法と
	console.log(point['y']);  //←の記法の２つのがある。

	point.z = 90; //プロパティにzの値をを追加
	delete point.y; //プロパティからyの値を削除
	console.log(point);

//オブジェクト操作

	const otherProps = {
		r: 4,
		color: 'red',
	};

	const Point = {
		w: 100,
		z: 180,
		...otherProps,
	};

	console.log(Point);

	const {w, z, ...rest} = Point;

	console.log(w); //100
	console.log(z); //180
	console.log(rest); //{r: 4, color: "red"}

//Object.keys()

	const Example = {
		x: 100,
		y: 180,
	};

	const keys = Object.keys(Example); //Pointのすべてのキーえお配列で取得


	keys.forEach(key => {
		console.log(`Key: ${key} Value: ${Example[key]}`);
	});                                //↑Point.keyではない


	const Examples = [
		{x: 30, y: 20},  //0
		{x: 10, y: 50},  //1
		{x: 40, y: 40},  //2
	];

	//50の値を取り出したい場合(配列の１番目、yの値)
	console.log(Examples[1].y);


//変数を代入する

	//単純なデータ型だと...
	let X = 1;
	let Y = X;
	X = 5;
	console.log(X); //5
	console.log(Y); //1


	//配列だと..B
	//↑と挙動が違う
	let A = [1, 2];
	let B = A;
	A[0] = 5;
	console.log(A); //[5, 2]
	console.log(B); //[5, 2]

	//配列の場合は B = A とすると、 A に割り当てられた値ではなくて、 B の値がどこに格納されているかという
	//情報だけが作られて、そこに B という名前が付くという仕組みになっています。
	//なので、Aが変わるとBも変わりAもBも同じ配列になった。

	//配列やオブジェクトの値を丸ごとコピーしたいときは...
	//スプレッド演算子がよく使われる

	let C = [1, 2];
	let D = [...C]; //ここで C の値が展開されて、 D には C の値がある場所ではなくて、こちらの [1, 2] という値そのものが代入されます。
	C[0] = 5;
	console.log(C); //[5, 2]
	console.log(D); //[1, 2]


//文字列の操作

	const str = 'hello';

	console.log(str.length); //strの文字数を表示（今回は５）

	//str.substring(開始位置, 終了位置); 開始位置から終了位置までの文字を取得
	console.log(str.substring(2, 4)); //'ll'が取得できる

	//文字列に対して配列のような記法を使うと、個々の文字にアクセスできる
	console.log(str[1]); //strの0から数えて１番目の文字を取得できる。この場合は'e'を取得。
	//この記法ではこのように値の取得ができるだけで、配列と同じように扱えるわけではない。

//join(),split

	const Date = [2019, 11, 14];

	//joinを使うと配列を結合した状態で表示できる
	console.log(Date.join('')); // 2019/11/14
	console.log(Date.join('/'));// 20191114


	const Time = '17:08:24';
	//splitを使うと文字列を区切り文字のところで分割して、それを配列にできる。
	console.log(Time.split(':')); //[17, 08, 24]

	//分割代入を使って、返り値を別々の定数に代入
	const [hour, minute, second] = Time.split(':');

	console.log(hour);  //17
	console.log(minute);//08
	console.log(second);//24

//数値計算

	const SCORES = [10, 3, 9];


	//SCORESの要素を全部足す

	let SUM = 0;

	SCORES.forEach(SCORES => {
		SUM += SCORES;
	});

	console.log(SUM); //22


	//SCORESの要素の平均値

	const AVG = SUM / SCORES.length;

	console.log(AVG); //7.333333333333333


	//7.333333333333333の操作をする

	//小数点以下の切り捨て
	console.log(Math.floor(AVG));//7

	//小数点以下の切り上げ
	console.log(Math.ceil(AVG));//8

	//四捨五入
	console.log(Math.round(AVG));//7

	//小数点以下○桁まで表示する（↓の場合は小数点以下３桁まで表示）
	console.log(AVG.toFixed(3));//7.333

	//乱数生成 (0以上1未満のランダムな数値を生成する)
	console.log(Math.random());

//ランダムな整数値

	console.log(Math.random()); //0 ≦ x < 1 の数字

	console.log(Math.random() * 3); //0 ≦ x < 3 の数字

	console.log(Math.floor(Math.random() * 3)); //0 ≦ x < 3 の数字から小数点以下を切り捨てるので、
	                                            //0か1か2が表示される

	console.log('0 ~ nのランダムな整数値を出すには');
	console.log('Math.floor(Math.random() * (n + 1)); で表示できる');

	console.log('--------------------------------');

	console.log('min ~ maxのランダムな整数値を出すには');
	console.log('Math.floor(Math.random() * (max + 1 - min)) + min で表示できる');

	console.log('--------------------------------');

	//サイコロの場合は１〜６の整数をランダムに出す
	console.log('サイコロのように１〜６の整数をランダムに出す');
	console.log('↑の公式を使う');
	console.log('Math.floor(Math.random() * (6 + 1 - 1)) + 1 で表示できる');

	console.log(Math.floor(Math.random() * (6 + 1 - 1)) + 1);

}

{
//現在日時

	const ddd = new Date(); //現在の日時を取得
	console.log(ddd);

	console.log(ddd.getFullYear()); //年のみを４桁で取得
	console.log(ddd.getMonth()); //月のみを取得　JSでは0月〜11月で表示されるので表示したい月に+1をしておく
								 //0:一月, 1:二月, 2:三月, 3:四月, ....., 11:十二月　で表される
	console.log(ddd.getDate()); //日のみを取得　１〜３１
	console.log(ddd.getDay()); //曜日のみを取得（０〜６） 日曜:0, 月曜:1, ...., 土曜:6で表される

	//時間の表記
	console.log(ddd.getHours()); //何時かを表示（０〜２３）
	console.log(ddd.getMinutes()); //何分かを表示（０〜５９）
	console.log(ddd.getSeconds()); //何秒かを表示（０〜５９）
	console.log(ddd.getMilliseconds()); //ミリ秒を表示（0~999）　※1ms = 1/1000sec

	console.log("↓今の月日を表示");
	console.log(`${ddd.getMonth() + 1} 月 ${ddd.getDate()} 日 `);

	//これはタイムゾーンに依存するので現地時間によって値が変わってしまう。
	//どのタイムゾーンでも同じ値をとる方法が用意されていて、getTime()を使えば良い

	console.log(ddd.getTime());
	//UTC と呼ばれる協定世界時の 1970 年 01 月 01 日 00 時 00 分 00 秒からの
	//経過ミリ秒が表示される。

//特定の日付

	//Dateの引数に値を入れると特定の日付に設定できる。
	//                       ↓月は0から始まるので、１１月は10で表す。
	const d = new Date(2019, 10); // 2019/11/01 00:00:00
	d.setHours(10, 20, 30);       // 2019/11/01 10:20:30
	d.setDate(31);                // 2019/12/01 10:20:30
	//11月は30日までしかないので31日指定すると、12月になる。
	d.setDate(d.getDate() + 3);   // 2019/12/04 10:20:30 (三日後の日付を表示する)
	console.log(d);

}

{
//alert(),confirm()

	//alert('hello');
	//アラートを表示してhelloと表示

	//confirmはOKとキャンセルのどちらをユーザーが選択するかによって返り値がtrueかfalseで返ってくる
	const answer = confirm('削除しますか？');
	if(answer) {
		console.log('削除しました');
	} else {
		console.log('キャンセルしました');
	}

}

{
//タイマー機能

	function showTime() {
		console.log(new Date());
	}
	//↑現在の日時を表示する関数

	//setInterval(showTime, 1000);
	//関数shoTimeを1秒（1000ミリ秒）毎に実行す

	//上記ではshowTimeには()を付けない。
	//()を付けてしまうと、この関数を実行したときに帰ってくる値をsetInterval()に返すことになるので。
	//今回だとこちらの関数には返り値がないので、その場合undefinedを渡すことになって意味が異なってきます。

	//回数を指定する場合
	let i = 0;

	function ShowTime(){
		console.log(new Date());
		i++;
		if (i > 2) {  //3回繰り返したら処理を終了
			clearInterval(intervalId);
		}
	}

	const intervalId = setInterval(ShowTime, 1000);

}

{
//setTimeout()

	function ShowTime() {
		console.log(new Date());
	}

	setTimeout(ShowTime, 1000);//指定した時間のあとに 1 回だけ処理を実行するように予約する命令
}

{
//例外処理

	const name = 'taguchi';

	console.log(name.toUpperCase()); //nameを大文字に変換する。TAGUCHIと表示される。
	console.log('Finish!');

	//もしtaguchiのような文字列ではなく5のような数値が入っていた場合エラーが出る。
	const NAME = 5;

	//例外処理の記述
	try {
		console.log(NAME.toUpperCase());
	} catch(e) {
		console.log(e);　//コンソールにはエラーの内容が表示される
	}
	//tryがもし実行できなかったら、catchの処理が実行される。
	//catch(e)の引数eは例外に関する情報を扱うための引数。e以外でもいいが、エラーにはeがよく使われる。

	console.log('Finish!');
	//例外処理を書いていいないとconsole.log(NAME.toUpperCase());でエラーが出て、Finish!は表示されないが
	//今回は例外処理を書いているためFinish!の行まで実行されている

}

{
//複数のオブジェクト

	const posts = [
		{
			text: 'JavaScriptの練習中・・・',
			likeCount: 0,
		},
		{
			text: 'プログラミング楽しい！',
			likeCount: 0,
		}
	];

	function show(post) {
		console.log(`${post.text} - ${post.likeCount}いいね`);
	}

	show(posts[0]);
	show(posts[1]);

}

