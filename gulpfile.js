var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

gulp.task('compile', function () {
  gulp.src('src/server.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/'))
});
