var gulp = require('gulp');
var typescript = require('gulp-typescript');
var webpack = require('webpack-stream');

gulp.task('build', ['webpack', 'ts']);
// Because gulp.run is deprecated, don't use gulp.run

gulp.task('ts', function() {
    console.log('ts');
    var options = {
        out: './ts2js/index.js',
        target: 'ES5',
        module: 'commonjs',
        removeComments: true
    };

    gulp.src([
        './ts/*.ts',
        '!./node_modules/**'
    ])
   .pipe(typescript(options))
   .pipe(gulp.dest('./ts2js'));
});

gulp.task('webpack', ['ts'], function() {
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


