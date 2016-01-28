/// <reference path="../typings/tsd.d.ts" />
import greeter = require('./gr');  
console.log(greeter("World"));
import $ = require('jquery');
import _ = require('underscore');

console.log(_);
console.log($);
// $(() => {
//   $(document.body).html(greeter("World"));
// });
