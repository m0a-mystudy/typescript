"use strict";
const Koa = require('koa');
const Router = require('koa-router');
let app = new Koa();
function apiRoute(config, prefix) {
    let router = null;
    if (prefix) {
        router = new Router({ prefix: prefix });
    }
    else {
        router = new Router();
    }
    for (let tableConfig of config) {
        // console.log(tableConfig.tableName);
        router.get(`${tableConfig.targetName}/`, listTarget(tableConfig.tableName));
        router.get(`${tableConfig.targetName}/:id`, showTarget(tableConfig.tableName));
    }
    return router;
}
function listTarget(targetName) {
    return function (ctx, next) {
        ctx.body = `listTarget:${targetName}`;
        return next();
    };
}
function showTarget(targetName) {
    return function (ctx, next) {
        ctx.body = `showTarget:${targetName}, ${ctx}`;
        return next();
    };
}
let config = [
    {
        targetName: 'emp',
        tableName: 'employee'
    },
    {
        targetName: 'sam1',
        tableName: 'sample'
    },
    {
        targetName: 'sam2',
        tableName: 'sample2'
    },
];
let router = apiRoute(config);
app.use(router.routes());
// app.use(async function test(ctx, next) {
// 	ctx.body = 'hello';
// 	ctx.status = 401;
// });
if (!module.parent) {
    app.listen(3000);
}
module.exports = app;
//# sourceMappingURL=app.js.map