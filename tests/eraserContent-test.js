/**
 * Created by azu on 2014/01/26.
 * LICENSE : MIT
 */
var eraser = require("../lib/eraserContent");
var assert = require("power-assert");
var fs = require("fs");
if (typeof String.prototype.contains === "undefined") {
    String.prototype.contains = function (s) {
        return this.indexOf(s) !== -1;
    };
}
describe("eraser", function () {
    var html;
    beforeEach(function () {
        html = fs.readFileSync(__dirname + "/fixtures/fixture2.html", "utf-8");
    });
    it("should remove h3 ECMAScript言語仕様 / ECMA-262 5.1 Edition", function () {
        assert(!eraser(html).html().contains("ECMAScript言語仕様 / ECMA-262 5.1 Edition"));
    })
    it("should remove div[class='clear_pos']", function () {
        assert(eraser(html).find('div[class="clear_pos"]').length === 0);
    });
    it("should remove p 訳の正確性を保証するものではありませんので必要に応じて原文である〜", function () {
        assert(!eraser(html).html().contains("訳の正確性を保証するものではありませんので必要に応じて原文である"));
    })
    it("should remove p link to license", function () {
        assert(!eraser(html).html().contains("ECMA-262 5.1 Edition 著作権情報"));
    });
    it("should remove p ECMA-262 5.1 読解時の留意点と原文リソース", function () {
        assert(!eraser(html).html().contains("ECMA-262 5.1 読解時の留意点と原文リソース"));
    });
    it("should remove p 訳:", function () {
        assert(!/訳:.*?webzoit.net/.test(eraser(html).html()));
    });
    it("should remove li /hp/menu/list/", function () {
        assert(eraser(html).find('a[href="/hp/menu/list/"]').length === 0);
    });
    it("should remove div[style]", function () {
        assert(eraser(html).find("div[style]").length === 0);
    });
});
