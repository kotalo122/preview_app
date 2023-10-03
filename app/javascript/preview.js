// docmentを全て読み込んでから実行する
document.addEventListener('DOMContentLoaded', function(){
  // 新規投稿・編集ページのフォームを取得 _form.html.erbのform_withにあるid 'new_post'を持ってくる
  const postForm = document.getElementById('new_post');
  // 新規投稿・編集ページのフォームがないならここで終了。「!」は論理否定演算子。
  if (!postForm) return null;
  console.log("preview.jsが読み込まれました");
});