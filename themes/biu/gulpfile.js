var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

// less.render
gulp.task('less', function() {
    return gulp.src('./source/less/*.less')
        .pipe(less({compress: true}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});

// liverender
gulp.task('liveless', ['less'], function() {
    gulp.watch('./source/less/_partial/*.less', ['less']);
    gulp.watch('./source/less/*.less', ['less']);
});