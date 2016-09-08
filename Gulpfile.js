// File: Gulpfile.js
'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sourcemaps = require('gulp-sourcemaps'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify');

// Servidor web de desarrollo
gulp.task('server', function(){
  connect.server({
    root: './app',
    port: 8080,
    livereload: true
  });
})

// Compila el html
gulp.task('html', function() {
  gulp.src('./app/templates/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./app/'))
});

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
  return gulp.src('./app/js/app.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(uglify())
    .pipe(concat('./app.min.js'))
    .pipe(gulp.dest('./app/js/'))
    .pipe(connect.reload());
});

// Preprocesa archivos SASS a CSS y recarga los cambios
gulp.task('css', function() {
  gulp.src('./app/css/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))// compact | compressed
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write())
    .pipe(concat('./main.css'))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});




// comprimido
gulp.task('server-min', function(){
  connect.server({
    root: './app',
    port: 8585
  });
})
gulp.task('html-min', function() {
  gulp.src('./app/templates/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./app/'))
});
gulp.task('js-min', function() {
  return gulp.src([
    './app/lib/zepto/zepto.min.js',
    './app/js/app.js'
    ])
    .pipe(uglify())
    .pipe(concat('./app.min.js'))
    .pipe(gulp.dest('./app/js/'));
});
gulp.task('css-min', function() {
  gulp.src('./app/css/scss/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))// compact | compressed
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(concat('./main.min.css'))
    .pipe(gulp.dest('./app/css'))
});

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
  gulp.watch(['./app/templates/**/*.jade'], ['html']);
  gulp.watch(['./app/css/**/*.scss'], ['css']);
  gulp.watch(['./app/js/**/*.js', './Gulpfile.js'], ['jshint']);
});

gulp.task('default', ['server','watch']);
gulp.task('build', ['server-min','html-min','js-min','css-min']);