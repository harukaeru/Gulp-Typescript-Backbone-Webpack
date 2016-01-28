# Gulp-Typescript-Backbone-Webpack

## I DO not guaranteed here correct or not.

```sh
$ gulp webpack  # -> dist/app.js
```

 ↑

```
$ node -v
v5.0.0
```


### npm
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


### tsd
Command example: `$ tsd install underscore --action install --resolve --save`
```sh
$ tsd install jquery
$ tsd install underscore
$ tsd install backbone-global  # Not backbone. backbone.d.ts is Not EXISTED NOW.
```
-> `src/ts/tsd.json`


### edit
src/ts/typings/backbone/backbone-global.d.ts
```
$ vim src/ts/typings/backbone/backbone-global.d.ts
/// <reference path="../jquery/jquery.d.ts" />
 ↓
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />
```


### Run
```sh
$ gulp webpack  # See gulpfile.js / Task 'webpack' will run.
```
