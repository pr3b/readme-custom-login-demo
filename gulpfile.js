const gulp = require('gulp');
const jade = require('gulp-jade');
const rename = require('gulp-rename');

gulp.task('build', function() {
  return gulp.src('views/*.jade')
    .pipe(jade())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch('views/*.jade', gulp.series('build'));
});
