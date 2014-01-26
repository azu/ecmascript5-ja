var gulp = require('gulp');
gulp.task('download', function (cb) {
    var download = require("./download-task/download-content");
    download(null, cb);
});


gulp.task('html2markdown', function () {
    var pandoc = require('gulp-pandoc');
    var es = require("event-stream");
    var htmlList = require("./index.json");
    var pathList = htmlList.map(function (ele) {
        return  "_download/" + ele + ".html";
    });

    function html2markdown(path, next) {
        gulp.src(path)
            .pipe(pandoc({
                from: 'html',
                to: 'markdown',
                ext: '.md'
            }))
            .pipe(gulp.dest('src/'))
            .pipe(es.wait(next));
    }

    // ファイルディスクリプタの制限を回避するためちょっとずつやる
    html2markdown(pathList.pop(), function req() {
        var path = pathList.pop();
        if (path) {
            html2markdown(path, req);
        }
    });
});


gulp.task('build', function () {
    var marked = require('gulp-marked');
    var concat = require('gulp-concat');
    var fileNameList = require("./index.json");
    var pathList = fileNameList.map(function (ele) {
        return  "src/" + ele + ".md";
    });

    gulp.src(pathList)
        .pipe(concat("index.html"))
        .pipe(marked({
            gfm: true
        }))
        .pipe(gulp.dest('./'));
});



