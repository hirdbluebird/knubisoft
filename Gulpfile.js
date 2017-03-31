var gulp = require('gulp');
var stylus = require('gulp-stylus');
var bootstrap = require('bootstrap-styl');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('stylus', function() {
	return gulp.src('public/stylesheets/stylus/main.styl')
				.pipe(stylus({
						use: [
							bootstrap()
						]
				}))
				.pipe(cssmin())
				.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest('public/stylesheets/css'));
});

gulp.task('watch', function(){
	gulp.watch('public/stylesheets/stylus/*', ['stylus']);
});