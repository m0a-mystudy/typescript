import * as Koa from 'koa';
import * as Router from 'koa-router';

let app = new Koa();

export = app;

interface TableConfig {
	targetName: string; // urlの一部として利用
	tableName: string;
}

function apiRoute(config: TableConfig[], prefix?: string): Router {
	let router: Router = null;
	if (prefix) {
			router = new Router({prefix: prefix});
	} else {
			router = new Router();
	}
	for (let tableConfig of config) {
			// console.log(tableConfig.tableName);
			router.get(`${tableConfig.targetName}/`, listTarget(tableConfig.tableName));
			router.get(`${tableConfig.targetName}/:id`, showTarget(tableConfig.tableName));
	}
	return router;
}

interface Midleware {
	(ctx: Koa.Context, next?: () => any): any;
}

function listTarget(targetName: string): Midleware {
	return function(ctx, next) {
		ctx.body = `listTarget:${targetName}`;
		return next();
	};
}

function showTarget(targetName: string): Midleware {
	return function (ctx, next){
		ctx.body = `showTarget:${targetName}, ${ctx}`;
		return next();
	};
}

let config: TableConfig[] = [
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

if (! module.parent) {
	app.listen(3000);
}

