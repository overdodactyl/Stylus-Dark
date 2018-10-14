'use strict';

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var exec = require('child_process').exec;

gulp.task('minify-css', () => {
  return gulp.src(['stylus-dark.user.css'])
    .pipe(cleanCSS({
      level : 2 ,
      format: 'beautify'
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('patch', () => {
  return exec('npx ver patch -p stylus-dark.user.css');
});

gulp.task('minor', () => {
  return exec('npx ver minor -p stylus-dark.user.css');
});

gulp.task('major', () => {
  return exec('npx ver major -p stylus-dark.user.css');
});
