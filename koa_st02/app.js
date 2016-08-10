/// <reference path="./typings/index.d.ts" />
"use strict";
const koa = require('koa');
const app = new koa();
function sleep(ms) {
    return function (cb) {
        setTimeout(cb, ms);
    };
}
app.use(function* (next) {
    let self = this;
    let start = Date.now();
    yield sleep(30);
    yield next;
    let ms = Date.now() - start;
    console.log('%s %s - %s', self.method, self.url, ms);
});
app.use(ctx => {
    ctx.body = 'Hello Koa';
});
app.listen(3000);
//# sourceMappingURL=app.js.map