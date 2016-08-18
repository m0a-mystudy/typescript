import * as Koa from 'koa';
import * as Router from 'koa-router';
import {CrudConfig} from './config';

export function apiRoute(config: CrudConfig, prefix?: string): Router {
	let router: Router = null;
	if (prefix) {
			router = new Router({prefix: prefix});
	} else {
			router = new Router();
	}
	for (let tableConfig of config.tables) {
			// console.log(tableConfig.tableName);
			router.get(`/${tableConfig.targetName}/`, listTarget(tableConfig.tableName));
			router.get(`/${tableConfig.targetName}/:id`, showTarget(tableConfig.tableName));
	}
	return router;
}


interface Midleware {
	(ctx: Router.IRouterContext, next?: () => any): any;
}

function listTarget(tableName: string): Midleware {
	return function(ctx, next) {
		ctx.body = `listTarget:${tableName}`;
		return next();
	};
}

function showTarget(tableName: string): Midleware {
	return function (ctx, next){
		// ctx.body = `showTarget:${tableName}, ${ctx.params.id}`;
		ctx.body = {id: parseInt(ctx.params.id)};
		return next();
	};
}
