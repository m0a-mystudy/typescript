"use strict";
var Koa = require("koa");
var app = new Koa();
app.use(function (next) {
    var start = new Date;
    yield next;
});
