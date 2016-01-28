var gulp = require('gulp');
var typescript = require('gulp-typescript');
var webpack = require('webpack-stream');
var path = require('path');

/*
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
*/

gulp.task('webpack', function() {
    var options = {
        entry: './src/ts/app.ts',
        output: {
            filename: 'bundle.js'
        },
        resolve: {
            root: [path.join(__dirname,'node_modules')],
            extensions: ['', '.ts']
        },
        module: {
            loaders: [
                {test: /\.ts$/, loader: 'ts-loader'}
           ]
        }
    };

    gulp.src([
        './src/ts/*.ts',
    ])
   .pipe(webpack(options))
   .pipe(gulp.dest('./dist'));
});


