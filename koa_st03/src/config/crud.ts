import {CrudConfig} from '../interfaces/config';
let crudConfig: CrudConfig;
export = crudConfig;

crudConfig = {
		tables: [
			{
				targetName: 'emp',
				tableName: 'employee'
			},
		],
		list: {
			'emp': [ ],
		},
		show: {
			'emp': [ ],
		},
	};

