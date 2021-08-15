'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const browsersync = require('browser-sync');

const dist = './dist/';
// const dist = "/Applications/MAMP/htdocs/test"; // Тут адрес к вашему серверу

gulp.task('copy-html', () => {
  return gulp.src('./src/index.html').pipe(gulp.dest(dist)).pipe(browsersync.stream());
});
