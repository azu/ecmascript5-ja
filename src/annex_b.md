付録 B (有益な情報) 互換性 Standard ECMA-262 5.1 Edition
--------------------------------------------------------

### 付録 B (有益な情報) 互換性

### B.1 追加構文

　ECMAScriptの過去の版(エディション)には、8進数リテラルと8進数エスケープシーケンス指定の為の追加構文と追加セマンティックスが含まれていました。
(しかし、)これらは、ECMAScriptのこの版(エディション)からは削除されています。
この非標準の添付書では、一部の古いECMAScriptプログラムに伴う互換性において8進数リテラルと8進数エスケープシーケンスの為の一定の構文とセマンティックスを提示します。

### B.1.1 数値リテラル

　 7.8.3
の構文とセマンティックスは、strictモードのコードにおいて許容されないこの拡張を除き、次のように拡張することが可能です。

    【構文】
    NumericLiteral ::
        DecimalLiteral
        HexIntegerLiteral
        OctalIntegerLiteral

    OctalIntegerLiteral ::
        0 OctalDigit
        OctalIntegerLiteral OctalDigit

    OctalDigit ::
        0 1 2 3 4 5 6 7
    の内の1つ

    【セマンティックス】
    ・ NumericLiteral の  MV  :: OctalIntegerLiteral は、 OctalIntegerLiteral の MV 
    ・ OctalDigit の  MV  :: 0 は、 0
    ・ OctalDigit の  MV  :: 1 は、 1
    ・ OctalDigit の  MV  :: 2 は、 2
    ・ OctalDigit の  MV  :: 3 は、 3
    ・ OctalDigit の  MV  :: 4 は、 4
    ・ OctalDigit の  MV  :: 5 は、 5
    ・ OctalDigit の  MV  :: 6 は、 6
    ・ OctalDigit の  MV  :: 7 は、 7
    ・ OctalIntegerLiteral の  MV :: 0 OctalDigit は、 OctalDigit の MV 
    ・ OctalIntegerLiteral の  MV :: OctalIntegerLiteral OctalDigit は、 ( OctalIntegerLiteral の MV 8通り ) OctalDigit の MV をプラス

### B.1.2 文字列リテラル

　 7.8.4
の構文とセマンティックスは、strictモードのコードにおいて許容されないこの拡張を除き、次のように拡張することが可能です。

    【構文】
    EscapeSequence ::
        CharacterEscapeSequence
        OctalEscapeSequence
        HexEscapeSequence
        UnicodeEscapeSequence

    OctalEscapeSequence ::
        OctalDigit[lookahead ? DecimalDigit]
        ZeroToThree OctalDigit [lookahead ? DecimalDigit]
        FourToSeven OctalDigit
        ZeroToThree OctalDigit
    (？は、∈の否定形)

    OctalDigit ZeroToThree ::
        0 1 2 3
    の1つ

    FourToSeven ::
        4 5 6 7
    の1つ

    【セマンティックス】
    ・  EscapeSequence の CV  :: OctalEscapeSequence は、OctalEscapeSequence の CV 
    ・  OctalEscapeSequence の CV  :: OctalDigit [lookahead ? DecimalDigit] は、 コードユニット値が OctalDigit の  MV である文字
    ・  OctalEscapeSequence の CV  :: ZeroToThree OctalDigit [lookahead ? DecimalDigit] は、 コードユニット値が ( ZeroToThree の  MV を8通り) OctalDigit の  MV をプラス
    ・  OctalEscapeSequence の CV  :: FourToSeven OctalDigit は、 コードユニット値が  (  FourToSeven の  MV を8通り) OctalDigit の  MV をプラス
    ・  OctalEscapeSequence の CV  :: ZeroToThree OctalDigit OctalDigit は、 コードユニット値が ( ZeroToThree の MV の64(つまり8の2乗)通り) プラス (8 times the MV of the first OctalDigit の MV 8通り) プラス 2つめの OctalDigit の MV の文字
    ・  ZeroToThree の  MV  :: 0 は、 0
    ・  ZeroToThree の  MV  :: 1 は、 1
    ・  ZeroToThree の  MV  :: 2 は、 2
    ・  ZeroToThree の  MV  :: 3 は、 3
    ・  FourToSeven の  MV  :: 4 は、 4
    ・  FourToSeven の  MV  :: 5 は、 5
    ・  FourToSeven の  MV  :: 6 は、 6
    ・  FourToSeven の  MV  :: 7 は、 7

### B.2 追加プロパティ

　ECMAScriptの一部の実装は、標準ネイティブオブジェクトの一部について追加プロパティを含みます。
この非標準の添付書では、この標準規格のプロパティやそれらのセマンティックス部分を作成することなく、このようなプロパティと同一のセマンティックスを示唆しています。

### B.2.1 escape (string)

　 escape関数は、グローバルオブジェクトのプロパティです。
16進数エスケープシーケンスによって置換される特定の文字において文字列値の新しいバージョンを算出します。
それらの文字については、コードユニット値が 0xFF
、または、より小さい場合、書式 %xx
という2ケタのエスケープシーケンス付きで置換されます。
それらの文字については、コードユニット値が 0xFF より大きい場合、書式
%uxxxx という4ケタ以下のエスケープシーケンス付きで置換されます。

　 escape関数は、引数 string
を1つ取って呼ばれる際には、次のステップが取られます。

    1. ToString(string) を呼ぶ
    2. 1項の結果内の文字数を算出する
    3. R は、カラの文字列とする
    4. k は、0とする
    5. k が、2項の数と等しい場合、R を返す
    6. 1項の結果内の位置 k にある(16ビット符号なし整数として表現した)文字を取得する
    7. 6項の結果が、ブランクのない69文字“ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@*_+-./” である場合、ステップ13へ
    8. 6項の結果が、256よりも小さい場合、ステップ11へ
    9.  wxyz が、6項の結果の値である4つの16進数のエンコード方式である場合、 S は、“%uwxyz”という6文字を含んだ文字列とする
    10.ステップ14へ
    11. xy が、6項の結果の値である2つの16進数のエンコード方式である場合、 S は、“%xy”という3文字を含んだ文字列とする
    12.ステップ14へ
    13. S は、単一文字である6項の結果を含む文字列とする
    14. R は、 R の前の値 と S を連結することによって算出した新たな文字列値とする
    15. k を1で増分する
    16. ステップ5へ

[注釈]

　エンコード方式は、部分的に RFC 1738
で説明したエンコード方式に基づきますが、 全体としては、RFC 1738
の内容とみなすことなく上記で説明されるこの標準規格内で指定したエンコード方式となります。
このエンコード方式は、 RFC 3986 によってなされた RFC 1738
への変更の影響は受けません。

### B.2.2 unescape (string)

　 unescape関数は、グローバルオブジェクトのプロパティです。
それは、ソート済みのエスケープシーケンスにおいて文字列値の新たなバージョンを算出し、それが表す文字で置換されるescape関数によって導入される場合があります。

　 unescape関数が、引数 string
を1つ伴って呼ばれる際には、次のステップが取られます。

    1. ToString(string) を呼ぶ
    2. 1項の結果内の文字数を算出する
    3. R は、カラの文字列とする
    4. k は、0とする
    5. k が、2項の数と等しい場合、R を返す
    6. c は、1項の結果の位置 k にある文字とする
    7. c が、 % ではない場合、ステップ18へ
    8. k が、 2項の結果-6 よりも大きい場合、ステップ14へ
    9. 1項の結果の位置 k+1 にある文字が、 u ではない場合、ステップ14へ
    10. 1項の結果の位置 k+2, k+3, k+4, k+5 にある4文字が、全て16進数値ではない場合、ステップ14へ
    11. c は、 1項の結果の位置 k+2, k+3, k+4, k+5 にある4つの16進数値によって表した整数であるコードユニット値を持つ文字とする
    12. k を5で増分する
    13. ステップ18へ
    14. k が、2項の結果-3 より大きい場合、ステップ18へ
    15. 1項の結果の位置 k+1 と k+2 にある2文字が、共に16進数ではない場合、ステップ18へ
    16. c は、2つのゼロにプラス1項の結果内の位置 k+1 と k+2 にある2つの16進数値によって表した整数であるコードユニット値を持つ文字とする
    17. kを2で増分する
    18. R は、 Rの前の値 と c を連結することによって算出した新たな文字列値とする
    19. kを1で増分する
    20.ステップ5へ

### B.2.3 String.prototype.substr (start, length)

　 substrメソッドは、 start と length
という2つの引数を取り、このオブジェクトを文字位置 start から始まり、
length 文字め(、または、 length が、 undefined
である場合、当該文字列の末尾)まで走査し、変換した結果の部分文字列を返します。
start が、負の値である場合、 sourceLength が、文字列の length
である場合、 (sourceLength+start) として扱われます。
その結果は、String値であってStringオブジェクトではありません。

　(substrメソッドは、)次のステップが取られます。

    1. ToStringを呼び、その引数として this 値を与える
    2. ToInteger(start) を呼ぶ
    3. length が、 undefined である場合、+∞ を使用し、それ以外の場合、 ToInteger(length) を呼ぶ
    4. 1項の結果にある文字数を算出する
    5. 2項の結果が、正の値または、ゼロである場合、2項の結果を使用し、それ以外の場合、 max(Result(4)+Result(2),0) を使用する
    6. min(max(Result(3),0), Result(4)-Result(5)) を算出する(3項、4項、5項の結果を使用して算出)
    7. 6項の結果 ≦ 0 となる場合、カラの文字列 "" を返す
    8. 5項の結果の位置にある文字を伴って始まる1項の結果から6項の結果が連続する複数文字を含む文字列を返す

　 substrメソッドのlengthプロパティは、2です。

[注釈]

　 substr関数は、汎用的であることが意図され、this
値がStringオブジェクトとなることを要求しません
その為、メソッドとして使用される場合、オブジェクトの他の種類に転送することが可能です。

### B.2.4 Date.prototype.getYear ( )

[注釈]

　2000年問題を回避することから(このgetYearよりも) getFullYear
メソッドの方が、ほぼ全ての目的において好まれます。

　
getYearメソッドが、引数を伴わずに呼ばれる際には、次のステップが取られます。

    1. t は、this 時間値とする
    2. t が、 NaN である場合、NaN を返す
    3. YearFromTime(LocalTime(t)) - 1900 を返す

### B.2.5 Date.prototype.setYear (year)

[注釈]

　2000年問題を回避することから(このsetYearよりも) setFullYear
メソッドの方が、ほぼ全ての目的において好まれます。

　 setYearメソッドが、 year
という引数1つを伴って呼ばれる際には、次のステップが取られます。

    1. t は、 LocalTime(this time value) の結果とするが、 this 時間値が、 NaN である場合、 t は、 +0 とする
    2. ToNumber(year) を呼ぶ
    3. 2項の結果が、NaN である場合、 this 値の内部プロパティ[[PrimitiveValue]]にNaNを設定し、NaNを返す
    4. 2項の結果が、NaN ではなく、且つ、 0 ≦ ToInteger(Result(2)) ≦ 99 (2項の結果を代入)である場合、  ToInteger(Result(2)) + 1900 とし、それ以外の場合、4項の結果は、2項の結果とする
    5. MakeDay(Result(4), MonthFromTime(t), DateFromTime(t)) を算出する
    6. UTC(MakeDate(Result(5), TimeWithinDay(t))) を算出する
    7. this 値の内部プロパティ[[PrimitiveValue]]に TimeClip(Result(6)) を設定する
    8. this 値の内部プロパティ[[PrimitiveValue]] の値を返す

### B.2.6 Date.prototype.toGMTString ( )

[注釈]

　(この toGMTString よりも)プロパティ toUTCString が好んで使用されます。
toGMTString プロパティは、古いコードを伴う互換性の為に主に提供されます。
新たなECMAScriptコード内で使用される toUTCString
プロパティが推奨されます。

　 Date.prototype.toGMTString の初期値であるFunctionオブジェクトは、
Date.prototype.toUTCString
の初期値であるFunctionオブジェクトと同一です。
