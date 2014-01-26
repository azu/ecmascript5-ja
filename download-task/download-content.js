/**
 * Created by azu.
 * Date: 12/08/11 10:22
 * License: MIT License
 */

var baseURI = "http://www.webzoit.net";
var urlLists = [
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/introduction/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/4/4_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/4/4_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/4/4_2/4_2_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/4/4_2/4_2_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/4/4_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/5/5_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/5/5_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/7_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/7_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/7_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/7_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/7_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/7_6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/7_7/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/7_8/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/7/7_9/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_7/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_8/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_9/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_10/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_11/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/8/8_12/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/9/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/10/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/10/10_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/10/10_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/10/10_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/10/10_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/10/10_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/10/10_6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_7/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_8/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_9/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_10/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_11/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_12/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_13/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/11/11_14/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_7/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_8/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_9/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_10/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_11/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_12/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_13/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_14/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/12/12_15/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/13/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/14/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/14/14_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_1/15_1_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_1/15_1_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_1/15_1_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_1/15_1_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_1/15_1_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_2/15_2_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_2/15_2_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_2/15_2_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_2/15_2_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_2/15_2_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_3/15_3_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_3/15_3_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_3/15_3_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_3/15_3_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_3/15_3_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_4/15_4_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_4/15_4_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_4/15_4_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_4/15_4_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_4/15_4_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_5/15_5_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_5/15_5_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_5/15_5_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_5/15_5_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_5/15_5_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_7/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_7/15_7_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_7/15_7_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_7/15_7_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_7/15_7_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_7/15_7_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_8/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_8/15_8_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_8/15_8_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_9/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_9/15_9_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_9/15_9_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_9/15_9_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_9/15_9_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_9/15_9_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_9/15_9_6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_10/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_10/15_10_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_10/15_10_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_10/15_10_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_10/15_10_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_10/15_10_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_10/15_10_6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_10/15_10_7/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_11/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_11/15_11_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_11/15_11_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_11/15_11_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_11/15_11_4/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_11/15_11_5/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_11/15_11_6/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_11/15_11_7/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_12/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_12/15_12_1/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_12/15_12_2/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/15/15_12/15_12_3/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/16/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_a/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_b/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_c/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_d/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_e/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/annex_f/",
    "http://www.webzoit.net/hp/it/internet/homepage/script/ecmascript/ecma262_51/contents/bibliography/"
];
var request = require("request");
var async = require('async');
var eraser = require("../lib/eraserContent");
var fs = require("fs");
var path = require("path")
var contents = {
    list: [],
    push: function (name, content) {
        this.list.push({name: name, body: content});
    }
}
function extracted(urls, callback) {
    async.eachLimit(urls, 3, function (url, next) {
        console.log("URL:", url);
        request(url, function (err, response, body) {
            if (err) {
                throw err;
            }
            var slimBody = eraser(body);
            var contentName = url.split("/").splice(-2).shift();
            contents.push(contentName, slimBody.html());
            next();
        });
    }, callback);
}

function output() {
    var dir = __dirname + "/../_download/";
    contents.list.forEach(function (data, index) {
        fs.writeFileSync(dir + data.name + ".html", data.body, "utf-8");
    });
    console.log("=> complete download :" + path.normalize(dir));
}

module.exports = function (urls, callback) {
    extracted(urls || urlLists, function (error) {
        if (error) {
            throw error;
        }
        output()
        if (typeof callback === "function") {
            callback();
        }
    });
}