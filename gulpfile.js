//导入工具包require('nide_modules里对应模块')
var gulp = require("gulp");//本地安装gulp所用到的地方 gulp命令
var	sass = require("gulp-sass"); //sass命令
var minfyCSS = require("gulp-minify-css");//压缩css文件

//拷贝sass
gulp.task("sass",function(){
	gulp.src("./src/sass/*.scss")
	.pipe(minfyCSS())
	.pipe(gulp.dest("./src/css"));
});

s


//监听所有
gulp.task("watch",function(){
	gulp.watch("./src/sass/*.scss",["sass"]);
});


