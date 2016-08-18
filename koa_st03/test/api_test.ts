import * as supertest from 'supertest';
import * as app from '../src/app';
import {ApiRouter} from '../src/api_router';
import * as Koa from 'koa';
import * as assert from 'power-assert';
import {CrudConfig} from '../src/interfaces/config';

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

	// let api_route = apiRoute(config, '/api/v1');
	let apiRouter = new ApiRouter(config, '/api/v1');

	let app = new Koa();
	// app.use(api_route.routes());
	app.use(apiRouter.routes());

	let req = supertest.agent(app.listen());
	it('get /emp', (done) => {
			req.get('/api/v1/emp')
			.expect(200, done);
	});

	it('get /emp/:id', (done) => {
			req.get('/api/v1/emp/1')
			.expect(200)
			.expect(JSON.stringify({id: 1}), done);
	});
});

