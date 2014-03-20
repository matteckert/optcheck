var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var paths = {
    gulpfile : 'gulpfile.js',
    test : 'test/**/*.js',
    source : 'lib/**/*.js'
};

gulp.task('default', ['test']);

gulp.task('lint', function(done) {
    return gulp.src([paths.test, paths.source])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', ['lint'], function() {
    return gulp.src(paths.test)
        .pipe(mocha({reporter: 'spec'}));
});
