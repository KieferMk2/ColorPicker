/** 定数定義 */
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');


/** 処理ブロック*/
//console.log('準備完了')
console.log(document.querySelector('#colorPicker').value);
// Case1.固定文字列で上書き
//document.querySelector('#colorText').textContent = 'カラーコード：';

// Case2.固定文字列と接続した文字列で上書き
//document.querySelector('#colorText').textContent = 'カラーコード：' + document.querySelector('#colorPicker').value;

// Case3.テンプレートリテラル（テンプレート文字列）を使って上書き
// 補足：.Net系でいうFormtメソッド、プレースホルダみたいなもの
//document.querySelector('#colorText').textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;
//text.textContent = `カラーコード：${color.value}`;

/** 関数 */
const colorBg = () => {
    //選択した色を背景色に設定
    document.body.style.backgroundColor = color.value;
    
    //カラーコードを表示
    if(color.value === '#ffffff') {
        text.textContent = `カラーコード：${color.value} (white)`;
    } else if (color.value === '#000000'){
        text.textContent = `カラーコード：${color.value} (black)`;
    } else {
        text.textContent = `カラーコード：${color.value}`;
    }
}

// イベント設定
color.addEventListener('input', colorBg);
// color.addEventListener('input', () => {
//     text.textContent = `カラーコード：${color.value}`;
// });
