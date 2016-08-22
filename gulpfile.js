//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

gulp.task('sbscript', function() {
    return gulp.src('src/*.js')
        //.pipe(concat('main.js'))    //合并所有js到main.js
        //.pipe(gulp.dest('dest'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dest'));  //输出
});

//执行压缩前，先删除文件夹里的内容
gulp.task('clean', function(cb) {
    del(['dest'], cb)
});

gulp.task('default', function() {
	gulp.start('clean');
    gulp.start('sbscript');
});

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径