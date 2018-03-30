const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const eslint = require('gulp-eslint');
const cssnano = require('gulp-cssnano');

// clean

gulp.task('clean:css', function() {
  return del(['public/css']);
});

gulp.task('clean:js', function() {
  return del(['public/js']);
});

gulp.task('clean:img', function() {
  return del(['public/img']);
});


// copy

gulp.task('copy', ['clean:img'], () => {
  return gulp.src('app/client/img/**/*')
    .pipe(gulp.dest('public/img'));
});


// lint

gulp.task('lint', () => {
  return gulp.src(['app/client/js/**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


// sass

gulp.task('sass', ['clean:css'], () => {
  return gulp.src('app/client/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});


// js

gulp.task('js:dev', ['clean:js'], function() {
  return gulp.src('app/client/js/**/*.js')
    .pipe(webpackStream(require('./webpack.config.js')))
    .pipe(gulp.dest('public/js'));
});

gulp.task('js:production', ['clean:js'], function() {
  var config = require('./webpack.config.js');
  config.plugins = config.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
  return gulp.src('app/client/js/**/*.js')
    .pipe(webpackStream(config))
    .pipe(gulp.dest('public/js'));
});


// minify

gulp.task('minify:css', ['sass'], function() {
  return gulp.src('public/css/app.css')
    .pipe(cssnano())
    .pipe(gulp.dest('public/css'));
});


// watch

gulp.task('watch', function() {
  gulp.watch(['app/client/js/**/*.js', 'app/client/js/**/*.jsx'], ['js:dev']);
  gulp.watch('app/client/sass/**/*.scss', ['sass']);
});


// bundle

gulp.task('bundle', ['lint', 'copy', 'minify:css', 'js:production']);
