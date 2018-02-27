var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

var path = {
  src: './src',
  dest: './dist'
}

gulp.task('bundle-server', function () {
  return gulp.src(`${path.src}/**/*.js`)
    .pipe(babel({
      presets: ['es2015']}
    ))
    .pipe(gulp.dest(path.dest));
})

// looking in de future watcher
gulp.task('watch', function () {
    gulp.watch([
      `${path.src}/**/*.js`,
    ], ['bundle-server']);
});

gulp.task('default', function () {
  run('build-server');
});
