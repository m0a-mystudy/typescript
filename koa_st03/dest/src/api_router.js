"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Router = require('koa-router');
// import {crud} from './model';
const model = require('./model');
const Debug = require('debug');
let debug = Debug('mycrud');
class ApiRouter extends Router {
    constructor(config, prefix) {
        debug('in ApiRouter constructor');
        if (prefix) {
            super({ prefix: prefix });
        }
        else {
            super();
        }
        this.config = config;
        for (let target of config.targets) {
            // console.log(tableConfig.tableName);
            this.get(`/${target}/`, this.index(target));
            this.get(`/${target}/:id`, this.view(target));
        }
    }
    index(target) {
        return function (ctx, next) {
            return __awaiter(this, void 0, void 0, function* () {
                let { limit, offset } = parseQuery(ctx.query);
                // ctx.body = `listTarget:${target}`;
                ctx.body = yield model.index(target, limit, offset);
                return next();
            });
        };
    }
    view(target) {
        return function (ctx, next) {
            // ctx.body = `showTarget:${tableName}, ${ctx.params.id}`;
            ctx.body = { id: parseInt(ctx.params.id) };
            return next();
        };
    }
}
exports.ApiRouter = ApiRouter;
function parseQuery({ limit, offset }) {
    let rlimit = parseInt(limit);
    let roffset = parseInt(offset);
    if (isNaN(rlimit)) {
        rlimit = 10;
    }
    if (isNaN(roffset)) {
        roffset = 0;
    }
    return { limit: rlimit, offset: roffset };
}
//# sourceMappingURL=api_router.js.map