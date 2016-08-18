import * as Koa from 'koa';
import * as Router from 'koa-router';
import {CrudConfig} from './interfaces/config';
import {crud} from './model';

interface Midleware {
	(ctx: Router.IRouterContext, next?: () => any): any;
}


export class ApiRouter extends Router {
	config: CrudConfig;
	constructor (config: CrudConfig, prefix?: string) {
		if (prefix) {
			super({prefix: prefix});
		} else {
			super();
		}
		this.config = config;
		for (let tableConfig of config.tables) {
			// console.log(tableConfig.tableName);
			this.get(`/${tableConfig.targetName}/`, this.listTarget(tableConfig.tableName));
			this.get(`/${tableConfig.targetName}/:id`, this.showTarget(tableConfig.tableName));
		}
	}

	private listTarget(tableName: string): Midleware {
		return function(ctx, next) {
			ctx.body = `listTarget:${tableName}`;
			return next();
		};
	}
	private showTarget(tableName: string): Midleware {
	return function (ctx, next) {
			// ctx.body = `showTarget:${tableName}, ${ctx.params.id}`;
			ctx.body = {id: parseInt(ctx.params.id)};
			return next();
		};
	}
}



