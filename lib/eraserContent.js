/**
 * Created by azu on 2014/01/26.
 * LICENSE : MIT
 */
var cheerio = require("cheerio");

// 不要な要素をContentsから消す
module.exports = function (body) {
    var $ = cheerio.load(body);
    var content = $('div.contents');
    content.find("script").remove();
    content.find(".page_link").remove();
    content.find(".bg_powderblue").remove();
    content.find("h3, p").each(function (index, ele) {
        var $ele = $(ele);
        var message = $ele.text();
        if (/^\s*?$/.test(message)) {
            $ele.remove();
        }
        if (message === "ECMAScript言語仕様 / ECMA-262 5.1 Edition") {
            $ele.remove();
        }
        if (message.indexOf("訳の正確性を保証するものではありませんので必要に応じて原文である") >= 0) {
            $ele.remove();
        }
        if (message.indexOf("ECMA-262 5.1 Edition 著作権情報") >= 0) {
            $ele.remove();
        }
        if (message.indexOf("ECMA-262 5.1 読解時の留意点と原文リソース") >= 0) {
            $ele.remove();
        }
        if (/訳:.*?webzoit.net/i.test(message)) {
            $ele.remove();
        }
    });
    content.find("pre").each(function (index, ele) {
        $(ele).removeAttr("style")
    });
    content.find('div[class="clear_pos"]').remove();
    // style の代わりに .pre-div をつける
    content.find("div[style]").each(function (index, ele) {
        $(ele).removeAttr("style");
        $(ele).addClass("pre-div");
    });
    var list = content.find("ul").filter(function (index, ele) {
        return $(ele).find('a[href="/hp/menu/list/"]').length > 0;
    });
    list.remove();
    return content;
};