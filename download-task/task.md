* スクレイピング対象のURL一覧を取得
    * http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_11/ だけおかしい
* ダウンロードしながらスクレイピング
    * .contents内の無駄な要素を削除
    * ページによってブレがある
    * style属性は特にブレてる
    * 章毎にarticle要素にする
* 各項毎のタイトルにa nameを付ける

正規表現で

    型の部分だけ元からidが振ってあるので消す
    before: <h3[^>]+>
    after :
    idを番号で付け直す
    before: <h3>([\d\.]+)(.*?)</h3>
    after : <h3>$1$2<a href="#x$1">#</a></h3>