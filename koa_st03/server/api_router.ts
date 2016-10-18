import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyparser from 'koa-bodyparser';
import {CrudConfig} from './interfaces/config';
// import {crud} from './model';
import * as model from './model';

import * as Debug from 'debug';
let debug = Debug('mycrud');

interface Midleware {
	(ctx: Router.IRouterContext, next?: () => any): any;
}


export class ApiRouter extends Router {
	config: CrudConfig;
	constructor (config: CrudConfig, prefix?: string) {
		debug('in ApiRouter constructor');
		if (prefix) {
			super({prefix: prefix});
		} else {
			super();
		}
		this.config = config;
		for (let target of config.targets) {
			// console.log(tableConfig.tableName);
			this.get(`/${target}/`, this.index(target));
			this.get(`/${target}/:id`, this.view(target));
			this.post(`/${target}/`, bodyparser(), this.create(target));
		}
	}

	private index(target: string): Midleware {
		return async function(ctx, next) {
			let {
				limit,
				offset
			} = parseQuery(ctx.query);
			// ctx.body = `listTarget:${target}`;
			ctx.body = await model.index(target, limit, offset);
			if (next)
			return next();
		};
	}
	private view(target: string): Midleware {
	return async function(ctx, next) {
			// ctx.body = `showTarget:${tableName}, ${ctx.params.id}`;
			// ctx.body = {id: parseInt(ctx.params.id)};
			let id: number = parseInt(ctx.params.id);
			ctx.body = await model.view(target, id);
			if (next)
			return next();
		};
	}
	private create(target: string): Midleware {
		return async function(ctx, next) {
			let body = (<any>ctx.request).body;
			console.log(JSON.stringify(body));
			ctx.body = await model.create(target, body);
		};
	}
}

function parseQuery({limit, offset}: {limit: string, offset: string}) {
	let rlimit = parseInt(limit);
	let roffset = parseInt(offset);

	if (isNaN(rlimit)) {
		rlimit = 10;
	}
	if (isNaN(roffset)) {
		roffset = 0;
	}

	return {limit: rlimit, offset: roffset};
}

