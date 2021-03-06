付録 D (有益な情報) 利用可能な第3版互換性への影響を伴う第5版での訂正事項と明確化 / Standard ECMA-262 5.1 Edition
----------------------------------------------------------------------------------------------------------------

### 付録 D (有益な情報) 利用可能な第3版互換性への影響を伴う第5版での訂正事項と明確化

#### 全体を通して:

　第3版仕様にあった"式 new Array()
によるかのような"のようなフレーズの意味は、誤解の対象となります。

　第5版仕様では、全ての内部参照と標準組み込みオブジェクト、メソッド全てにおけるテキストは、現在、一致する名前付きプロパティの動的な値ではなく、その意図は、実際の組み込みオブジェクトが使用されることであり、それを明示的にさせることによって明確にしています。

#### 11.8.2, 11.8.3, 11.8.5:

　ECMAScriptでは一般に評価順を左から右に使用しますが、エディション3仕様の言語では、
\> と \<= 演算子については、部分的に右から左の順に結果を出していました。

　仕様書では、現在、全ての評価順を左から右に指定するようにこれらの演算子について修正されています。

　しかしながら、この順序の変更は、評価処理中に副作用が現れる場合、潜在的に観測可能となっています。

#### 11.1.4:

　第5版では、 ArrayInitialiser
の末尾にある後続するカンマは、配列の大きさに追加しないという事実を明確にしておきます。

　これは、第3版仕様からのセマンティック変更ではありませんが、一部の実装では、この誤解を以前から持つ場合があります。

#### 11.2.3:

　第5版では、当該アルゴリズムのステップ2と3の順を逆転させています。

　エディション1～3内で指定したようにオリジナルの順は、 MemberExpression
(メンバ式)を評価した結果に影響する可能性がある Arguments
を評価中の副作用のように間違った指定でした。

#### 12.4:

　第3版では、tryステートメントの catch
句に渡した例外パラメータの名称解決におけるスコープとして提供する new
Object() によるかのように任意のオブジェクトが生成されます。

　実際の例外オブジェクトが、関数で且つ、 catch
句の中から呼ばれる場合、そのスコープのオブジェクトは、その呼び出しの
this 値として渡されるでしょう。

　関数の本体は、その後、その this
値上に新たなプロパティを定義し、それらのプロパティは、関数が返した後に
catch
句のスコープ内にあるバインディングする識別子が見えるようになります。

　第5版では、例外パラメータが関数として呼ばれる場合、 this 値として
undefined (未定義)が、渡されます。

#### 13:

　第3版では、任意の識別子を伴うプロダクション FunctionExpression
(関数式)は、関数の名称を検索する為のスコープとして提供する為のスコープチェーンに
new Object() によるかのように生成したオブジェクトを追加します。

　このようなオブジェクトに適用する識別子解決の規則(第3版の 10.1.4
)は、識別子を解決する為に試行される際には、おそらく必要に応じてオブジェクトのプロトタイプチェーンに続くでしょう。

　これは、そのスコープ内にある識別子として可視である Object.prototype
のプロパティ全てを意味します。

　実際には、第3版に完全に準拠している実装は、このセマンティックスを実装していません。

　第5版では、その関数の名称をバインドする宣言型環境レコードを使用することによって指定したセマンティックスを変更します。

#### 14:

　第3版では、プロダクション

    SourceElements : SourceElements SourceElement

におけるアルゴリズムは、Blockと同じ方法で値を出す文を正しく伝達するようにはなりません。

　これは、Programのテキスト評価中に誤った結果を生成してしまう eval
関数内で結果を得ることが可能でした。

　実際には、第3版に完全に準拠している実装は、第5版で指定したものではなく、正確な伝達が実装されています。

#### 15.10.6:

　 RegExp.prototype は、現在、オブジェクトのインスタンスではなく、
RegExp オブジェクトとなっています。

　 Object.prototype.toString
を使用することによって観測可能なその内部プロパティ[[Class]]の値は、現在、"Object"ではなく、"RegExp"となっています。
