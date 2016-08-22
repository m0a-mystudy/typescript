import * as Koa from 'koa';
import * as Knex from 'knex';
import * as crudConfig from '../config/crud';
import * as dbConfig  from '../config/database';
import * as Debug from 'debug';
let debug = Debug('mycrud');

let db = Knex(dbConfig);

export function index(target: string, limit: number = 10, offset: number = 0): Promise<any> {
	debug(`in index target= ${target}, limit= ${limit}, offset= ${offset}`);
	let schema = crudConfig.schema[target];
	let selectColumns = schema.indexColumns;
	let table = crudConfig.tables[target];
	return new Promise<any>(resolve => {
		resolve(
			db.from(table)
			.select(selectColumns)
			.limit(limit)
			.offset(offset));
	});
}

export function view(target: string, id: number): Promise<any> {
	let table = crudConfig.tables[target];
	let selectColumns = crudConfig.schema[target].viewColumns;
	let pk = crudConfig.schema[target].primaryKey;
	return new Promise<any>(resolve => {
		resolve(
			db.from(table)
			.select(selectColumns)
			.where(pk, id)
			.first()
		);
	});
}
