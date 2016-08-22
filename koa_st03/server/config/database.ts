let dbConfig = {
		client: 'mysql',
		connection: {
			database: 'employees',
			user:     'root',
			password: 'root'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	};

export = dbConfig;