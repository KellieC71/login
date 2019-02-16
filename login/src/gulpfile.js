'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var changed = require('gulp-changed');









var SCSS_SRC = './scr/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';


gulp.task('compile_scss', function () {

    gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: 'min' }))
        .pipe(changed(SCSS_DEST))
        .pip(gulp.dest(SCSS_DEST));

});