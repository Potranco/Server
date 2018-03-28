var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var exec = require('gulp-exec');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass')
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

gulp.task('build-main',['styles'], function () {
  browserify({
      entries: [`${path.src}/components/main.js`],
      transform: [babelify]
    }).bundle()
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(`${path.dest}/public`))

})

gulp.task('styles', ['build-server'], function() {
    gulp.src(`${path.src}/sass/**/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${path.dest}/public/css/`))
});

gulp.task('build-server', function () {
  gulp.src(`${path.src}/**/*.js`)
    .pipe(babel({ presets: ['es2015']} ))
    .pipe(gulp.dest(path.dest));
})

gulp.task('watch', function () {
    gulp.watch([
      `${path.src}/**/*.js+(!${path.src}/public/*)`,
    ], ['build-server','build-main']);
});

gulp.task('default', function () {
  gulp.start('build-main');
});
