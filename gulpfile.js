var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('main-css', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});
gulp.task('watch-main-css', function() {
    gulp.watch('src/sass/**/*.scss', ['main-css']);
});
