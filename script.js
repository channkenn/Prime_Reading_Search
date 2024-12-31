/**
 * Prime Reading検索（ユーザー入力に基づく検索）
 */
function search() {
  // 検索キーワードを取得
  var word = document.getElementById("word").value.trim();

  // 空文字の場合、Prime Readingのトップページを表示
  if (!word) {
    var url =
      "https://www.amazon.co.jp/kindle-dbs/hz/bookshelf/prime?_encoding=UTF8&ref_=sv_nav_ebook_5";
  } else {
    // キーワードをURLエンコードして、Prime Readingの検索URLを生成
    var word_enc = encodeURIComponent(word); // 入力キーワードをURLエンコード
    var url =
      "https://www.amazon.co.jp/s?k=" +
      word_enc +
      "&i=prime-reading&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A";
  }

  // 新しいタブでPrime Readingの検索結果またはトップページを表示
  window.open(url, "_blank");
}
