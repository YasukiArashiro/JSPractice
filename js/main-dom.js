'use strict';

{
	function update() {
		//document.querySelector('h1').textContent = 'Changed!';
			//DOMはdocumentという特殊なオブジェクトで扱うことができて、文書内から特定の要素を所得する場合には
			//querySlector()というメソッドを使うことができる。
			//中身のテキストはtextContentで扱うことができる。

		//document.querySlector('#target').textContent = 'Changed!';
		document.getElementById('target').textContent = 'Changed!!!';
		//このように２つの書き方ができる。getElementByIdの時は、taegetに#を付けなくてもよい
	}

	setTimeout(update, 1000);　//１秒後にupdateを実行する
}
