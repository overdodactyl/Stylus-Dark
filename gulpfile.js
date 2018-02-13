'use strict';

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');


gulp.task('minify-css', () => {
  return gulp.src(['Stylus_Dark.css'])
    .pipe(cleanCSS({
      level : 2 ,
      format: 'beautify'
    }))
    .pipe(gulp.dest('.'));
});
