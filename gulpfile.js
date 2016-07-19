'use strict'

var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('default', ['html', 'js', 'css']);


//html
gulp.task('html', function(){
  // gulp.src('./templates/*.html')
  //   .pipe(gulp.dest('./public/templates'))
    gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));
    // Also copy over the templates directory.
    gulp.src('./templates/directives/*.html').pipe(gulp.dest('./public/templates/directives'));


  return gulp.src('./index.html')
    .pipe(gulp.dest('./public'));
});

//js
gulp.task('js', function(){
  gulp.src('app.js')
    .pipe(browserify())
    .pipe(gulp.dest('./public'));
});


//css
gulp.task('css', function(){
  gulp.src('./styles.css')
    .pipe(sass())
    .pipe(gulp.dest('./public'));
})

gulp.task('watch', function(){
  gulp.watch('./index.html', ['html'])
  gulp.watch('./js/*.js', ['js'])
  gulp.watch('./templates/*.html', ['html'])
  gulp.watch('./scss/*.scss', ['css'])
});
