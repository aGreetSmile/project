var gulp = require("gulp");

var sass = require("gulp-sass");
//复制html文件
gulp.task("copy-html", function () {
    gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\TwoP\\copy"))
})

//复制js文件
gulp.task("copy-js", function () {
    gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\TwoP\\copy\\js"))
})

//sass编译
gulp.task("sass-css", function () {
    gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("src"))
})
//复制css文件
gulp.task("copy-css", function () {
    gulp.src("src/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\TwoP\\copy\\src"))
})

//复制img文件
gulp.task("copy-imgs", function () {
    gulp.src("images/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\TwoP\\copy\\images"))
});

//复制img文件
gulp.task("copy-php", function () {
    gulp.src("php/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\TwoP\\copy\\php"))
});

gulp.task("watchall",function(){
    gulp.watch("sass/*.scss", ["sass-css"])
    gulp.watch("*.html", ["copy-html"])
    gulp.watch("src/*.css", ["copy-css"])
    gulp.watch("js/*.js", ["copy-js"])
    gulp.watch("images/**/*", ["copy-imgs"])
    gulp.watch("php/**/*", ["copy-php"])
})
