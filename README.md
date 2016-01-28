# Gulp-Typescript-Backbone-Webpack
よくわかってないちん
```sh
$ gulp webpack  # -> dist/app.js
```

 ↑

```
$ node -v
v5.0.0
```


Command example: `$ npm install ts-loader --save-dev`
```sh
$ npm install jquery  
$ npm install gulp  # a task runner
$ npm install gulp-typescript  # no needed. <- because of using 'webpack-stream'
$ npm install tsd  # Type Definition Manager in typescript.
$ npm install ts-loader  # I don't know.
$ npm install webpack  # a build tool
$ npm install webpack-stream  # gulp-webpack is deprecated.
```
-> `package.json`


Command example: `$ tsd install underscore --action install --resolve --save`
```sh
$ tsd install jquery
$ tsd install underscore
$ tsd install backbone-global  # Not backbone. backbone.d.ts is Not EXISTED NOW.
```
-> `src/ts/tsd.json`

backbone-global.d.ts
```
$ vim src/ts/typings/backbone/backbone-global.d.ts
/// <reference path="../jquery/jquery.d.ts" />
 ↓
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />
```

```sh
$ gulp webpack  # See gulpfile.js / Task 'webpack' will run.
```
