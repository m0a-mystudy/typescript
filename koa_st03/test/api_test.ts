import * as supertest from 'supertest';
import * as app from '../src/app';
import {apiRoute, TableConfig} from '../src/api_route';

import * as Koa from 'koa';

import * as assert from 'power-assert';

// describe('apptest', () => {
// 	let req = supertest.agent(app.listen());
// 	it('get', (done) => {
// 		req.get('/sample1').expect(200, done);
// 	});
// });

// describe('APIRouteテスト', () => {
// 	let config: TableConfig[] = [
// 		{
// 			targetName: 'emp',
// 			tableName: 'employee'
// 		},
// 		{
// 			targetName: 'sam1',
// 			tableName: 'sample'
// 		},
// 		{
// 			targetName: 'sam2',
// 			tableName: 'sample2'
// 		},
// 		];
// 	let router = apiRoute(config);

// 	// let api_route = apiRoute(config, 'api/v1/');
// 	let api_route = apiRoute(config);
// 	let app = new Koa();
// 	app.use(convert(api_route.routes()));
// 	// app.use((ctx, next) => {
// 	// 		ctx.body = 'hello';
// 	// });

// 	let req = supertest.agent(app.listen());
// 	it('get', (done) => {
// 			req.get('/emp').expect(200, done);
// 	});
// });

