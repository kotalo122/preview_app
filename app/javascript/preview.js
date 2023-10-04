// docmentを全て読み込んでから実行する
document.addEventListener('DOMContentLoaded', function(){
  // 新規投稿・編集ページのフォームを取得 _form.html.erbのform_withにある<%= form_with model: @post, id: 'new_post', local: true do |f| %>
  const postForm = document.getElementById('new_post');
  
  // プレビューを表示するためのスペースを取得  _form.html.erbのform_withにある<div id="previews"></div>
  const previewList = document.getElementById('previews');
  
  // 新規投稿・編集ページのフォームがないならここで終了。「!」は論理否定演算子。
  if (!postForm) return null;
  console.log("preview.jsが読み込まれました");

  // input要素を取得　　　<div class="click-upload">の中にあるinput要素　　
  // 検証を参照<input type="file" name="post[image]" id="post_image">
  const fileField = document.querySelector('input[type="file"][name="post[image]"]');

  // input要素で値の変化が起きた際に呼び出される関数
  fileField.addEventListener('change', function(e){ 
    console.log("input要素で値の変化がありました");
    console.log(e.target.files[0]);
    // 「type="file"」にイベントリスナーを登録したときに、引数としてファイル情報が含まれるEventオブジェクトを変数eから受け取る 
    // 選択したファイルの情報は「target.filesプロパティ」に配列形式で入っているため、ファイルが1つのときは先頭の「0」から参照できる
    const file = e.target.files[0];
    // windowオブジェクトの中のURLオブジェクトに対して、引数に変数fileをセットしたcreateObjectURL()メソッドを呼び出すことで、画像データへアクセス可能なURLを生成することができる
    const blob = window.URL.createObjectURL(file);
    console.log(blob);
    // 画像を表示するためのdiv要素を生成. createElement()メソッドは、HTML要素を生成するメソッド
    const previewWrapper = document.createElement('div');
    // previewWrapper 変数に setAttribute メソッドを使用して、class 属性に "preview" という属性値を設定
    previewWrapper.setAttribute('class', 'preview');
    // 表示する画像を生成.img要素を生成.
    const previewImage = document.createElement('img');
    // previewImage変数にsetAttributeメソッドを使用してclass属性に preview-imageという属性値を設定
    previewImage.setAttribute('class', 'preview-image');
    // setAttributeメソッドを用いて生成したimg要素のsrc属性へ変数blobを設定
    previewImage.setAttribute('src', blob);
     // 生成したHTMLの要素をブラウザに表示させる.appendChild()メソッドは、指定した親要素の中に要素を追加するメソッド.親要素.appendChild(追加する子要素);
     previewWrapper.appendChild(previewImage);
     previewList.appendChild(previewWrapper);
  });
});