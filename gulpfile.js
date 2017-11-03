// 引入gulp
var gulp = require('gulp');

// 防止js报错是gulp停止工作
var plumber = require('gulp-plumber');

// 引入压缩html的插件
var gulpHtml = require('gulp-htmlmin');

// 引入压缩js的插件
var uglify = require('gulp-uglify');

// 引入压缩css的插件
var cssnano = require('gulp-cssnano');

// 引入sass预编译
var sass = require('gulp-sass');

// 引入img
// var imgs = require('gulp-imagemin');



// *****浏览器同步
var browserSync = require('browser-sync');

// gulp分任务执行
// 第一个任务是用来压缩html
gulp.task('html',function(){
    var option = {
        collapseWhitespace: true,
        removeComments: true,
        removeStyleLinkTypeAttributes: true
    };
    gulp.src('src/*.html')
    .pipe(gulpHtml(option))
    .pipe(gulp.dest('dist'))
    // *****
    .pipe(browserSync.reload({
        stream:true
    }));
});

// 第二个任务是用来压缩js
gulp.task('js',function(){
    // 找到所有的js文件,不同级目录也能找到
    gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    // *****
    .pipe(browserSync.reload({
        stream:true
    }))
});
// 第三个任务css
gulp.task('style',function(){
    gulp.src('src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    // *****
    .pipe(browserSync.reload({
        stream:true
    }))
});

// // 第四个任务,图片压缩
// gulp.task('imgs',function(){
//     gulp.src('src/images/*.{png,jpg,gif,ico}')
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/images/'))
// });


// 第五个任务,浏览器自动刷新
// *****
gulp.task('servers',function(){
    var obj = {
        server: {
            baseDir: ['dist/']
        }
    }
    function info(err,bs){
        console.log(bs.options.getIn(["urls", "local"]))
    }
    browserSync(obj,info);

    gulp.watch('src/*.html',['html']);
    gulp.watch('src/js/**/*.js',['js']);
    gulp.watch('src/css/*.scss',['style']);
});

// 使用一条命令执行所有任务
// *****
gulp.task('default',['servers','html','js','style']);












