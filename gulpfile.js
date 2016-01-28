var gulp = require('gulp');
var typescript = require('gulp-typescript');

gulp.task('ts', function() {
    var options = {
        out: 'index.js'
    };

    gulp.src([
        './**/*.ts',
        '!./node_modules/**'
    ])
   .pipe(typescript(options))
   .pipe(gulp.dest('./dest'));
});
