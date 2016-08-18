"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Koa = require('koa');
const app = new Koa();
app.use(function test(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.body = 'hello';
        ctx.status = 401;
    });
});
if (!module.parent) {
    app.listen(3000);
}
module.exports = app;
//# sourceMappingURL=app.js.map