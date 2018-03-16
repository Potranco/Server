var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var exec = require('gulp-exec');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');


var path = {
  src: './src',
  dest: './dist'
}

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

gulp.task('dev', () => gulp.start('default'));

gulp.task('build-server', function () {
  gulp.src(`${path.src}/**/*.js`)
    .pipe(babel({ presets: ['es2015']} ))
    .pipe(gulp.dest(path.dest));
})

gulp.task('watch', function () {
    gulp.watch([
      `${path.src}/**/*.js`,
    ], ['build-server']);
});

gulp.task('default', function () {
  gulp.start('build-server');
});
