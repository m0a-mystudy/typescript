import * as Koa from 'koa';
import * as Knex from 'knex';
// import * as crudConfig from '../config/crud';
import {CrudConfig} from '../interfaces/config';


interface ModelFunctions {
	[target: string]: () => Promise<any>;
}

export function crud(config: CrudConfig): ModelFunctions {
	let functions: ModelFunctions;

	for (let table of config.tables) {
		functions[table.targetName] = () => {
			return new Promise<string>((resolve, reject) => {
					resolve(table.tableName);
			});
		};
	};
	return functions;
};


