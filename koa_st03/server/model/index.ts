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
	let schema = crudConfig.schema[target];
	let selectColumns = schema.viewColumns;
	let pk = schema.primaryKey;
	return new Promise<any>(resolve => {
		resolve(
			db.from(table)
			.select(selectColumns)
			.where(pk, id)
			.first()
		);
	});
}

export function create(target: string, data: Object): Promise<any> {
	let table = crudConfig.tables[target];
	let schema = crudConfig.schema[target];
	return new Promise<any>(resolve => {
		resolve(
			db.insert(data).into(table)
		);
	});
}

export function update(target: string, pk_id: number, data: Object): Promise<any> {
	let table = crudConfig.tables[target];
	let schema = crudConfig.schema[target];
	let pk = schema.primaryKey;
	return new Promise<any>(resolve => {
		// console.log('in update');
		// console.log(`data=${JSON.stringify(data)}, table=${JSON.stringify(table)}, pk=${pk}, pk_id=${pk_id}`);
		resolve(
			db.update(data).from(table).where(pk, pk_id)
		);
	});
}

export function remove(target: string, pk_id: number): Promise<any> {
	let table = crudConfig.tables[target];
	let schema = crudConfig.schema[target];
	let pk = schema.primaryKey;
	return new Promise<any>(resolve => {
		resolve(
			db.from(table).where(pk, pk_id).delete()
		);
	});
}