## ecmascript5-ja

[ECMAScript / Standard ECMA-262 Edition 5.1 訳](http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/ "ECMAScript / Standard ECMA-262 Edition 5.1 訳") を元に
読みやすく加工しようとしてるもの。

## Usage

``` sh
npm install
```

### gulp task

```
[gulp]
├── download
├── html2markdown
└── build
```

## Copyright notice

```
This document and possible translations of it may be copied and furnished to others, and derivative works that comment on or otherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part, without restriction of any kind, provided that the above copyright notice and this section are included on all such copies and derivative works.
However, this document itself may not be modified in any way, including by removing the copyright notice or references to Ecma International, except as needed for the purpose of developing any document or deliverable produced by Ecma International (in which case the rules applied to copyrights must be followed) or as required to translate it into languages other than English.

The limited permissions granted above are perpetual and will not be revoked by Ecma International or its successors or assigns.

This document and the information contained herein is provided on an "AS IS" basis and ECMA INTERNATIONAL DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE INFORMATION HEREIN WILL NOT INFRINGE ANY OWNERSHIP RIGHTS OR ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE."

Software License

All Software contained in this document ("Software)" is protected by copyright and is being made available under the "BSD License", included below.
This Software may be subject to third party rights (rights from parties other than Ecma International), including patent rights, and no licenses under such third party rights are granted under this license even if the third party concerned is a member of Ecma International.
SEE THE ECMA CODE OF CONDUCT IN PATENT MATTERS AVAILABLE AT http://www.ecma-international.org/memento/codeofconduct.htm FOR INFORMATION REGARDING THE LICENSING OF PATENT CLAIMS THAT ARE REQUIRED TO IMPLEMENT ECMA INTERNATIONAL STANDARDS*.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    Neither the name of the authors nor Ecma International may be used to endorse or promote products derived from this software without specific prior written permission.



THIS SOFTWARE IS PROVIDED BY THE ECMA INTERNATIONAL "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL ECMA INTERNATIONAL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

```
 この文書とその翻訳と成り得るものは、別途コピーされたり、装飾されたりする場合があり、いかなる制約もなく全体や一部についてコメントをしたり、あるいは説明したり、その実装内での補足が、用意、コピー、発行、配布される場合がある二次的著作物については、上記の著作権声明とこのセクションが、そのようなコピーと二次的著作物全てについて含まれた上で提供されます。 しかしながら、この文書それ自身は、(継続されなければならない著作権を適用した規則において)Ecma Internationalによる任意の文書や二次的著作物の開発という目的において、または、 Ecma International によって生成された成果物、英語以外の言語への翻訳の為の要件として以外は、権利声明やEcma Internationalへの参照を削除している場合も含め、いかなる方法においても修正されない場合があります。

上記で付与した限定的な許可は、恒久的なものであり、Ecma International やその後継者、または、その関係者によって取り消されるようなことはないでしょう。

この文書とここに記載されたものを含む情報は、"今ある現状"に基づいて提供されるものであり、[ ECMA INTERNATIONAL は、表明、または、暗黙的に、全ての保証を放棄しますが、任意の特定の目的における適合適否についてのいかなる所有権や、いかなる暗黙的な保証をも侵害しないであろうここに記載される情報の使用において、どんな保証かについては限定しませんでした。]

ソフトウェアライセンス

全てのソフトウェアは、この文書 ("ソフトウェア)" に含んだ全てのソフトウェアは、著作権と以下を含む有効な"BSDライセンス"の下で保護されます。 このソフトウェアは、サードパーティーの権利( Ecma International ではない第三者からの権利)を対象とする場合があり、特許権を含め、ライセンスを持たないそのようなサードパーティの権利の下では、 Ecma International のメンバである関連したサードパーティでさえ、このライセンスの下で保証されることになります。 [ ECMA INTERNATIONAL STANDARDS* を実装することを要求される特許請求の範囲のライセンスとみなされる情報については、 http://www.ecma-international.org/memento/codeofconduct.htm にある 有効な特許事項内で動作するECMAコード を参照 ]

改変あり、または改変なしでの再配布とソース及びバイナリ形式での使用は、以下の条件が満たされて提供された場合に許可されます。

    ソースコードの再配布は、上記の著作権声明文、及び、条件についてのこのリストと次の免責事項を保持しなければいけません。
    バイナリ形式での再配布は、この文書や配布する他の資料内に上記の著作権声明文、この条件のリスト、次の免責事項を再生成しなければいけません。
    著者の名前や Ecma International の何れについても、特定の書面による事前の許可なく、このソフトウェアから派生したという裏付けや現物を裏付ける為に使用される場合があります。

このソフトウェアは、 ECMA INTERNATIONAL によって"今ある現状"が提供され、表明した、または暗黙のあらゆる保証を含みますが、特定の目的が否認される場合の適合適否についての暗黙の保証を限定しませんでした。 ECMA INTERNATIONAL は、(代替商品や代替サービスの調達、使用不能、データや利益の損失、ビジネスの中断等々、限定はしませんでしたが、それらを含め、)直接的、間接的、付随的、特例的、典型的、結果的な損害に何らかの責任がある可能性はありますが、しかしながら、原因となるもの、または何らかの損害賠償の概念上、そのような損害の可能性を示唆した場合でさえ、このソフトウェアの利用上のなんらかの方法において生じる契約上、厳格責任上、(過失またはそれ以外を含む)不法行為上であるかに関わらず、いかなる場合においてもその責任は負いかねます。
```


[著作権情報 / ECMA-262 5.1 Edition](http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/copyright/ "著作権情報 / ECMA-262 5.1 Edition")