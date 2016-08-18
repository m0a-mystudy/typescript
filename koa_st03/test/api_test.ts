import * as supertest from 'supertest';
import * as app from '../src/app';
import {apiRoute} from '../src/api_route';
import * as Koa from 'koa';
import * as assert from 'power-assert';
import {CrudConfig} from '../src/config';

describe('APIRouteテスト', () => {
	let config: CrudConfig = {
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

	let api_route = apiRoute(config, '/api/v1');
	let app = new Koa();
	app.use(api_route.routes());

	let req = supertest.agent(app.listen());
	it('get /emp', (done) => {
			req.get('/api/v1/emp').expect(200, done);
	});

	it('get /emp/:id', (done) => {
			req.get('/api/v1/emp/1').expect(200).expect(JSON.stringify({id: 1}), done);
	});


});

