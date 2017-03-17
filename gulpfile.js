'use strict';
const path = require('path');
const gulp = require('gulp');
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();
const gulpSequence = require('gulp-sequence');
const importOnce = require('node-sass-import-once');
const stylemod = require('gulp-style-modules');
const browserSync = require('browser-sync').create();
const gulpif = require('gulp-if');
const combiner = require('stream-combiner2');
const bump = require('gulp-bump');
const argv = require('yargs').argv;
/* Used to transpile JavaScript */
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const cache = require('gulp-cached');
/* Add'l transpilation helpers */
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const globby = require('globby');
const through = require('through2');
const replace = require('gulp-replace');
const del = require('del');
const fs = require('fs');

const sassOptions = {
  importer: importOnce,
  importOnce: {
    index: true,
    bower: true
  }
};

gulp.task('clean', function() {
  return gulp.src(['.tmp', 'css', 'dist'], {
    read: false
  }).pipe($.clean());
});

function handleError(err){
  console.log(err.toString());
  this.emit('end');
}

function buildCSS(){
  return combiner.obj([
    $.sass(sassOptions),
    $.autoprefixer({
      browsers: ['last 2 versions', 'Safari 8.0'],
      cascade: false
    }),
    gulpif(!argv.debug, $.cssmin())
  ]).on('error', handleError);
}

gulp.task('sass', function() {
  return gulp.src(['./sass/*.scss'])
    .pipe(cache('sassing'))
    .pipe(buildCSS())
    .pipe(stylemod({
      moduleId: function(file) {
        return path.basename(file.path, path.extname(file.path)) + '-styles';
      }
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream({match: 'css/*.html'}));
});

//////// DIST PROCESS

gulp.task('dist:clean', function () {
  return del(['./dist/']);
});

gulp.task('dist:js', ['dist:clean'], function () {
  const babelOpts = {
    "presets" : ["es2015"],
    "minified" : true,
    "comments" : false,
    "plugins": [
      ["transform-runtime", {
        "helpers": true,
        "polyfill": true,
        "regenerator": false,
      }]
    ]
  };
  const bundler = through();

  bundler
    .pipe(source('px-map-bundle.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./dist/'));

   globby(['./px-*.es6.js']).then((entries) => {
     // @TODO: We have to sort this for now to make sure load order is correct.
     // This is a bad solution that we should not have to do here.
     entries = entries.reduce((accum, entry) => {
       if (/behavior\-element\.es6\.js$/.test(entry)) { accum[0] = entry; }
       else if (/behavior\-layer\.es6\.js$/.test(entry)) { accum[1] = entry; }
       else { accum = accum.concat([entry]); }
      return accum;
     }, [null,null]);

     const b = browserify({
       entries: entries
     });

     b.transform("babelify", babelOpts).bundle().pipe(bundler);
   });

   return bundler;
});

gulp.task('dist:html', ['dist:clean'], function () {
  return gulp.src(['./px-*.html'])
    // Replace script links to `.es6.js` files with a link to an importer
    .pipe(replace(/(\<script.*src\=[\'|\"])(px-.*\.es6.js)([\'|\"].*\/script\>)/g, '<link rel="import" href="px-map-bundle-loader.html" />'))
    // Replace all script and link tag relative paths that begin with `../`
    // with `../../` (e.g. <script src="../polymer/polymer.htl")
    .pipe(replace(/(\<[\s]?(?:link|script).*(?:src|href)\=(?:\"|\'))(\.\.\/)/g, "$1../../"))
    // Replace links to local CSS
    .pipe(replace(/(\<link.*href=[\'|\"])(css\/)(px-.*(?=\.html|\.css))/g, "$1../css/$3"))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist:makeloader', ['dist:html'], function(cb){
  fs.writeFile('dist/px-map-bundle-loader.html', '<script src="px-map-bundle.js"></script>', {encoding:'utf8',flag:'wx'}, cb);
});

gulp.task('dist', ['dist:js', 'dist:html', 'dist:makeloader']);

//////// END DIST PROCESS

gulp.task('watch', function() {
  gulp.watch(['sass/*.scss'], ['sass']);
});

/* Doesn't rebuild the `dist/` directory on save. Use to serve and build using
   an ES6 compatible browser (e.g. Safari) */
gulp.task('serve', function() {
  browserSync.init({
    port: 8080,
    notify: false,
    reloadOnRestart: true,
    logPrefix: `${pkg.name}`,
    https: false,
    server: ['./', 'bower_components'],
    reloadDebounce: 1000
  });

  gulp.watch(['./*.js','./*.html'], ['dist']);
  gulp.watch(['sass/*.scss'], ['sass']);
  gulp.watch(['css/*-styles.html', './*.html', `./*.js`, 'demo/*.html']).on('change', browserSync.reload);
});

/* Rebuilds all `.es6.js` files to the `/dist` directory along with all regular
   files to allow for a seamless import experience. Use to serve and build using
   a non-ES6 compatible browser like IE11 or Firefox. */
gulp.task('serve:dist', function() {
  browserSync.init({
    port: 8080,
    notify: false,
    reloadOnRestart: true,
    logPrefix: `${pkg.name}`,
    https: false,
    server: ['./', 'bower_components'],
    reloadDebounce: 1000
  });

  gulp.watch(['sass/*.scss'], ['sass']);
  gulp.watch(['css/*-styles.html', './*.html', `./*.js`, 'demo/*.html']).on('change', browserSync.reload);
});

gulp.task('bump:patch', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'minor'}))
  .pipe(gulp.dest('./'));
});

gulp.task('bump:major', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'major'}))
  .pipe(gulp.dest('./'));
});

gulp.task('default', function(callback) {
  gulpSequence('clean', 'sass', 'dist')(callback);
});
