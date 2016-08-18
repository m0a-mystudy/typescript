"use strict";
const Router = require('koa-router');
class ApiRouter extends Router {
    constructor(config, prefix) {
        if (prefix) {
            super({ prefix: prefix });
        }
        else {
            super();
        }
        this.config = config;
        for (let tableConfig of config.tables) {
            // console.log(tableConfig.tableName);
            this.get(`/${tableConfig.targetName}/`, this.listTarget(tableConfig.tableName));
            this.get(`/${tableConfig.targetName}/:id`, this.showTarget(tableConfig.tableName));
        }
    }
    listTarget(tableName) {
        return function (ctx, next) {
            ctx.body = `listTarget:${tableName}`;
            return next();
        };
    }
    showTarget(tableName) {
        return function (ctx, next) {
            // ctx.body = `showTarget:${tableName}, ${ctx.params.id}`;
            ctx.body = { id: parseInt(ctx.params.id) };
            return next();
        };
    }
}
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=api_router.js.map