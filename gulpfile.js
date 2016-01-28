var gulp = require('gulp');
var typescript = require('gulp-typescript');
var webpack = require('webpack-stream');

gulp.task('build', ['ts', 'webpack']);
// Because gulp.run is deprecated, don't use gulp.run

gulp.task('ts', function() {
    var options = {
        // out: 'index.js',
        target: 'ES5',
        module: 'commonjs',
        removeComments: true
    };

    gulp.src([
        './**/*.ts',
        '!./node_modules/**'
    ])
   .pipe(typescript(options))
   .pipe(gulp.dest('./ts2js'));
});

gulp.task('webpack', function() {
    var options = {
        entry: './ts2js/index.js',
        output: {
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['', '.js']
        }
    };

    gulp.src([
        './ts2js/*.js',
    ])
   .pipe(webpack(options))
   .pipe(gulp.dest('./dest'));
   console.log("finish");
});


