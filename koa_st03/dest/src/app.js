"use strict";
const Koa = require('koa');
const api_router_1 = require('./api_router');
const crudConfig = require('./config/crud');
const app = new Koa();
const router = new api_router_1.ApiRouter(crudConfig, '/api/v1');
app.use(router.routes());
if (!module.parent) {
    app.listen(3000);
}
//# sourceMappingURL=app.js.map