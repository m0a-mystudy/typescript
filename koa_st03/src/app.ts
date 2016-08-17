import * as Koa from 'koa';

const app = new Koa();
export = app;

app.use(async function test(ctx, next) {
	ctx.body = 'hello';
	ctx.status = 401;
});

if (! module.parent) {
	app.listen(3000);
}

