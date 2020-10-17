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

    //targetNode.classList.toggle('my-color');

    //targetNode.textContent = 'Dotinstall';
    targetNode.textContent = targetNode.dataset.translation;

    //要素の追加
    const item2 = document.createElement('li'); //li要素を作成
    item2.textContent = 'item 2'; //liの中のテキストを設定

    const ulNode = document.querySelector('ul'); //まずは親要素であるul要素をquerySelectorで取得
    ulNode.appendChild(item2); //ulの子要素の末尾にitem2の要素を追加


    //要素の複製と追加
    const item0 = document.querySelectorAll('li')[0];

    const copy = item0.cloneNode(true); //()の中をfalseにすると要素の中身を複製しない空のli要素ができる

    const ul = document.querySelector('ul'); //親要素を所得
    const Item2 = document.querySelectorAll('li')[2]; //item2を所得

    ul.insertBefore(copy, Item2); //Item2の前にcopyを挿入する(insertBefore)

    const item1 = document.querySelectorAll('li')[1];

    //item1.remove();
    //親Node.removeChild(削除するNode)
    document.querySelector('ul').removeChild(item1);

  });
}
