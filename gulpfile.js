var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');


var path = {
  src: './src',
  client: './src/client/app.js',
  dest: './dist'
}

/* Client */
gulp.task('build-client', function() {
  browserify({
    entries: [path.client],
    transform: [babelify]
  }).bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist/public/'))
});

/* Server */
gulp.task('build-server', function () {
  return gulp.src([
      `${path.src}/db/**/*.js`,
      `${path.src}/routers/**/*.js`,
      `${path.src}/templates/**/*.js`,
      `${path.src}/user/**/*.js`,
      `${path.src}/server.js`
    ])
    .pipe(babel({
      presets: ['es2015']}
    ))
    .pipe(gulp.dest(path.dest));
})

gulp.task('watch', function () {
    gulp.watch([
      `${path.src}/**/*.js`,
    ], ['build-server']);
});

gulp.task('default', function () {
  gulp.start('build-server','build-client');
});
