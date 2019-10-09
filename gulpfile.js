var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var gcmq = require('gulp-group-css-media-queries');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var config = {
    src: './src/',
    css: {
        watch: 'scss/**/*.scss',
        src: 'scss/styles.scss',
        dest: 'css'
    },
    html: {
        src: '*.html'
    }
};

gulp.task('build', function(){
   gulp.src(config.src + config.css.src)
       .pipe(sass().on('error', sass.logError))
       /*.pipe(gcmq())
       .pipe(autoprefixer({
            browsers: ['> 0.01%'],
            cascade: false
        }))
       .pipe(cleanCSS())*/
       .pipe(gulp.dest(config.src + config.css.dest))
       .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch(config.src + config.css.watch, ['build']);
    gulp.watch(config.src + config.html.src, browserSync.reload);
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});