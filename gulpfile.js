const gulp = require('gulp')
const babel = require('gulp-babel')
const cache = require('gulp-cached')
const chmod = require('gulp-chmod')

const path = 'bin/**/*'

gulp.task('transpile', () => {
  return gulp.src(path)
  .pipe(cache('transpile'))
  .pipe(babel())
  .pipe(chmod(755))
  .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  gulp.watch(path, ['transpile'])
})

gulp.task('default', ['watch', 'transpile'])
