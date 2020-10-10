'use strict';

// {
// 	function update() {
// 		//document.querySelector('h1').textContent = 'Changed!';
// 			//DOMはdocumentという特殊なオブジェクトで扱うことができて、文書内から特定の要素を所得する場合には
// 			//querySlector()というメソッドを使うことができる。
// 			//中身のテキストはtextContentで扱うことができる。

// 		//document.querySelector('#target').textContent = 'Changed!';
// 		//document.getElementById('target').textContent = 'Changed!!!';
// 		//このように２つの書き方ができる。getElementByIdの時は、taegetに#を付けなくてもよい

// 		const targetNode = document.getElementById('target');

// 		targetNode.textContent = 'Changed!!!';

// 		targetNode.title = 'This is title!';

// 		targetNode.className = 'my-color my-border';

// 		//document.querySelector('p').textContent = 'pを書き換えました！！'; ※最初にpだけ書き換えられる

// 		//document.querySelectorAll('p')[1].textContent = 'pを書き換えました！！';
// 		//↑上から1番目のpを書き換える！

// 		document.querySelectorAll('p').forEach((p, index) => {
// 			p.textContent = `${index}番目のpです！`
// 		})
// 	}

// 	document.querySelector('button').addEventListener('click', () => {
// 		document.getElementById('target').textContent = 'ボタン押したら変わりました！';
// 	})

// 	setTimeout(update, 1000);　//１秒後にupdateを実行する


// }




{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    // targetNode.className = 'my-color my-border';
    // targetNode.classList.add('my-color');
    // if (targetNode.classList.contains('my-color') === true) {
    //   targetNode.classList.remove('my-color');
    // } else {
    //   targetNode.classList.add('my-color');
    // }
    targetNode.classList.toggle('my-color');
  });
}
