import * as supertest from 'supertest';
import * as app from '../src/app';
import {apiRoute, TableConfig} from '../src/api_route';
import * as Koa from 'koa';
import * as assert from 'power-assert';


describe('APIRouteテスト', () => {
	let config: TableConfig[] = [
		{
			targetName: 'emp',
			tableName: 'employee'
		},
	];

	let api_route = apiRoute(config, '/api/v1');
	let app = new Koa();
	app.use(api_route.routes());

	let req = supertest.agent(app.listen());
	it('get /emp', (done) => {
			req.get('/api/v1/emp').expect(200, done);
	});

	it('get /emp/:id', (done) => {
			req.get('/api/v1/emp/1').expect(200, done);
	});


});

