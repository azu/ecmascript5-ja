/**
 * Created by azu.
 * Date: 12/08/11 13:12
 * License: MIT License
 */
var nodeio = require('node.io')
    , options = {
        jsdom: true
    };

var emit = [];
var baseURI = "http://www.webzoit.net";
var count = 0;
function emitPush(string) {
    if (emit.indexOf(string) === -1) {
        console.log(string);
        emit.push(string);
    }

}
function extracted(self, url, callback) {
    self.getHtml(url, function (err, $, data) {
        if (err) {
            self.exit(err);
            return;
        }
        // 現在地を追加
        emitPush(url);
        var regexp = /float:.*?right/i;
        var nextLinks = $('div[style]').map(function (idx, ele) {
            var style = ele.getAttribute('style');
            var isTest = regexp.test(style);
            if (isTest) {
                return $(ele).find("a");
            }
        });
        var nextLinkATag = nextLinks[nextLinks.length / 2];
        var attrHref = nextLinkATag.attr("href");
        if (attrHref.length > 0) {
            var nextURL = baseURI + attrHref;
            // 再帰的にnextをたどる
            extracted(self, nextURL, callback);
        } else {
            callback();
        }
    })
}
exports.job = new nodeio.Job(options, {
    input: false,
    run: function () {
        var self = this,
            url = "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/introduction/";
        extracted(self, url, function () {
            extracted(self, "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_12/", function () {
                self.emit(emit.join("\n"));
            });
        });
    },
    output: function (lines) {
        var annexList = [
            "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_a/",
            "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_b/",
            "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_c/",
            "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_d/",
            "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_e/",
            "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_f/",
            "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/bibliography/"
        ];
        var allLines = lines.concat(annexList);
        this.write("url_list_ex.txt", allLines.join('\n'));
    }
})