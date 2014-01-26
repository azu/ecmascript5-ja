付録 C (有益な情報) ECMAScriptのStrictモード / Standard ECMA-262 5.1 Edition
----------------------------------------------------------------------------

### 付録 C (有益な情報) ECMAScriptのStrictモード

### strictモードの制限と例外

-   Identifier(識別子) "implements", "interface", "let", "package",
    "private", "protected", "public", "static", "yield" は、strictモード
    ( 7.6.12 )内のトークン(字句) FutureReservedWord(将来の予約語)
    として分類されます。
-   準拠する実装は、strictモードのコードを処理中は、 B.1.1
    で説明したように OctalIntegerLiteral を含む為に NumericLiteral
    (7.8.3)の構文を拡張しない場合があります。
-   準拠する実装は、strictモードのコードを処理中 ( 10.1.1 参照)は、
    B.1.2 で説明したように OctalEscapeSequence(8進エスケープシーケンス)
    を含む為に EscapeSequence(エスケープシーケンス)
    の構文を拡張しない場合があります。
-   宣言されていない識別子やそれ以外の未解決の参照への関連付けについては、グローバルオブジェクト内でプロパティを生成しません。
    単純な関連付けが、strictモードのコード内に現れる場合、その
    LeftHandSide は、未解決のReference(参照)を評価してはいけません。
    評価するとReferenceError例外が投げられ(スローされ)ます(8.7.2)。
    LeftHandSide(左辺) は、また、属性値 {[[Writable]]:false}
    を伴うデータプロパティ、属性値 {[[Set]]:undefined}
    を伴うアクセサプロパティや内部プロパティ[[Extensible]]が値 false
    を持つオブジェクトの実在しないプロパティへの参照にはならない場合があります。
    これらのケースについては、TypeError例外が投げられ(スローされ)ます(11.13.1)。
-   Identifier(識別子) eval や引数は、代入演算子(11.13)や
    PostfixExpression(後置式) (11.3)の
    LeftHandSideExpression(左辺式)として、または、前置増分演算子(11.4.4)や減分演算子(11.4.5)によって操作した
    UnaryExpression(単項式)として現れない場合があります。
-   strictモードの関数における引数オブジェクトは、アクセス上のTypeError例外を投げる(スローする)場合、
    "caller" と "callee"
    と名付けた設定なしのアクセサプロパティを定義します(10.6)。
-   strictモードの関数における引数オブジェクトは、それらの関数の関連付けをする正規のパラメータと一致するプロパティ値をインデックスしたそれらの配列を直接共有しません。(10.6)。
-   strictモードの関数においては、引数オブジェクトが、当該引数オブジェクトへのローカル識別子の引数の関連付けを生成した場合、不変であり、その為、関連付ける式のターゲットとならない場合があります(10.5)。
-   strictモードのコードが、一部のデータプロパティ(11.1.5)の1つ以上の定義を伴う
    ObjectLiteral を含む場合、SyntaxErrorです。
-   Identifier(識別子) "eval" やIdentifier(識別子) "arguments"
    が、任意の PropertyAssignment(プロパティの関連付け) の任意の
    PropertySetParameterList(プロパティへのパラメータリスト設定)
    内にあるIdentifier(識別子)として現れ、それが厳格(strict)なコード内に含まれる場合や、その
    FunctionBody(関数本体)
    が、strictモードのコードである場合には、SyntaxErrorです。
-   Strictモードの eval コードは、 eval への caller
    の環境変数内で変数や関数をインスタンス化することはできません。
    その代わり、新しい環境変数が生成され、その環境は、当該 eval
    コードにおけるインスタンス化をバインディングする定義の為に使用されます(10.4.2)。
-   this が、strictモードのコード内で評価される場合、 this
    値は、オブジェクトに強制変換されます。 null や undefined である this
    値は、グローバルオブジェクトに変換されませんし、プリミティブ(原始的な)値は、ラッパオブジェクトには変換されません。
    ( Function.prototype.apply と Function.prototype.call
    を使用させる呼び出しを含む)関数呼び出し経由で解析した this
    値は、解析した this
    値をオブジェクトに強制変換することはありません(10.4.3, 11.1.1,
    15.3.4.3, 15.3.4.4)。
-   delete演算子が、strictモードのコード内に現れる場合、その
    UnaryExpression(単項式)
    が、直接変数、関数の引数、関数名等を参照する場合、SyntaxErrorが投げられ(スローされ)ます(11.4.1)。
-   delete演算子が、strictモードのコード内に現れる場合、その削除されるプロパティが、属性
    { [[Configurable]]:false }
    を持つ場合、TypeErrorが投げられ(スローされ)ます(11.4.1)。
-   VariableDeclaration(変数宣言) や
    VariableDeclarationNoIn(変数宣言なし)
    が、厳格な(strict)コード内に現れたり、そのIdentifier(識別子)が、
    eval や arguments である場合、SyntaxErrorです(12.2.1)。
-   Strictモードのコードは、 WithStatement( with 文)
    を含まない場合があります。 このような文脈における WithStatement(
    with 文) の出現は、SyntaxErrorです(12.10)。
-   Catch を伴う TryStatement( try 文)
    が、strictモードのコード内に現れたり、そのIdentifier(識別子)が、
    eval や arguments である場合、SyntaxErrorです(12.14.1)。
-   Identifier(識別子) eval や arguments が、strictモードの
    FunctionDeclaration(関数宣言) や FunctionExpression(関数式) の任意の
    FormalParameterList(正規のパラメータリスト)
    内に現れる場合、SyntaxErrorです(13.1)。
-   strictモードの関数は、同じ名称を持つ2つ以上の正規のパラメータを持たない場合があります。
    FunctionDeclaration(関数宣言)、FunctionExpression(関数式)、Functionコンストラクタ
    を使って関数を生成する試行は、 SyntaxErrorです (13.1, 15.3.2)。
-   実装は、 caller
    と名付けたプロパティのstrictモードの関数や関数のインスタンスの引数という意味においてこの仕様内で定義した範囲を超えて拡張しない場合があります。
    ECMAScriptのコードは、strictモードの関数と一致する関数オブジェクト上でこれらの名称を持つプロパティを生成または編集しない場合があります(
    10.6, 13.2, 15.3.4.5.3)。
-   FunctionDeclaration(関数宣言) や FunctionExpression(関数式)
    のIdentifierとして、または、正規のパラメータ名としてIdentifier(識別子)
    eval や argments
    をstrictモードのコード内で使用することは、SyntaxErrorです(13.1)。
    Functionコンストラクタ(15.3.2)を使用してこのようなstrictモードの関数を直接定義する試行には、SyntaxError例外を投げる(スローする)でしょう。

