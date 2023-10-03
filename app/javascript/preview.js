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
  });
});