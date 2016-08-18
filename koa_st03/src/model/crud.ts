import * as Koa from 'koa';
import * as Knex from 'knex';
import {TableConfig} from '../config';

interface Midleware {
	(ctx: Koa.Context, next?: () => any): void;
}


export  = function crud(config: TableConfig) {

};
