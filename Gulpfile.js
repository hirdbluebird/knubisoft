var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

var autoprefixerOptions = {
	browsers: ['> 1%']
}

gulp.task('stylus', function() {
	return gulp.src('public/stylesheets/stylus/main.styl')
			   .pipe(stylus())
			   .pipe(autoprefixer(autoprefixerOptions))
			   .pipe(cssmin())
			   .pipe(rename({suffix: '.min'}))
			   .pipe(gulp.dest('public/stylesheets/css'));
});

gulp.task('watch', function(){
	gulp.watch('public/stylesheets/stylus/*', ['stylus']);
});