import * as Koa from 'koa';
import * as Router from 'koa-router';

export interface TableConfig {
	targetName: string; // urlの一部として利用
	tableName: string;
}

export function apiRoute(config: TableConfig[], prefix?: string): Router {
	let router: Router = null;
	if (prefix) {
			router = new Router({prefix: prefix});
	} else {
			router = new Router();
	}
	for (let tableConfig of config) {
			// console.log(tableConfig.tableName);
			router.get(`/${tableConfig.targetName}/`, listTarget(tableConfig.tableName));
			router.get(`/${tableConfig.targetName}/:id`, showTarget(tableConfig.tableName));
	}
	return router;
}


interface Midleware {
	(ctx: Koa.Context, next?: () => any): void;
}

function listTarget(tableName: string): Midleware {
	return function(ctx, next) {
		ctx.body = `listTarget:${tableName}`;
		next();
	};
}

function showTarget(tableName: string): Midleware {
	return function (ctx, next){
		ctx.body = `showTarget:${tableName}, ${ctx}`;
	};
}
