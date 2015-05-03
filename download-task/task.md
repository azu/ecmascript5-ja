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
    

pandocでtableを上手く扱えないので、以下のようにキチンとしたHTMLにする。theadとcaptionが重要

    <table>
        <caption>Table 4 - String 1文字エスケープシーケンス</caption>
        <thead>
        <tr><th>エスケープシーケンス</th><th>コードユニット値</th><th>名称</th><th>記号</th></tr>
        </thead>
        <tr><td>\b</td><td>\u0008</td><td>backspace</td><td>&lt;BS&gt;</td></tr>
        <tr><td>\t</td><td>\u0009</td><td>horizontal tab</td><td>&lt;HT&gt;</td></tr>
        <tr><td>\n</td><td>\u000A</td><td>line feed (new line)</td><td>&lt;LF&gt;</td></tr>
        <tr><td>\v</td><td>\u000B</td><td>vertical tab</td><td>&lt;VT&gt;</td></tr>
        <tr><td>\f</td><td>\u000C</td><td>form feed</td><td>&lt;FF&gt;</td></tr>
        <tr><td>\r</td><td>\u000D</td><td>carriage return</td><td>&lt;CR&gt;</td></tr>
        <tr><td>\"</td><td>\u0022</td><td>double quote</td><td>&quot;</td></tr>
        <tr><td>\'</td><td>\u0027</td><td>single quote</td><td>&apos;</td></tr>
        <tr><td>\\</td><td>\u005C</td><td>backslash</td><td>\</td></tr>
    </table>