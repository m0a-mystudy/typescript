import * as supertest from 'supertest';
import * as app from '../src/app';
import {ApiRouter} from '../src/api_router';
import * as Koa from 'koa';
import * as assert from 'power-assert';
// import {CrudConfig} from '../src/interfaces/config';
import * as crudConfig from '../src/config/crud';


describe('APIテスト', () => {

	// let api_route = apiRoute(config, '/api/v1');
	let apiRouter = new ApiRouter(crudConfig, '/api/v1');
	let app = new Koa();
	app.use(apiRouter.routes());

	let req = supertest.agent(app.listen());
	it('get /api/v1/emp', (done) => {
			req.get('/api/v1/emp')
			.expect('Content-Type', /json/)
			.expect(200)
			.expect((resp: supertest.Response) => {
				assert.equal(resp.body.length, 10);
				return resp;
			})
			.end(done);
	});

	it('get /api/v1/emp?limit=12&offset=3', (done) => {
			req.get('/api/v1/emp?limit=12&offset=3')
			.expect('Content-Type', /json/)
			.expect(200)
			.expect((resp: supertest.Response) => {
				assert.equal(resp.body.length, 12);
				return resp;
			})
			.end(done);


	});

	it('get /emp/:id', (done) => {
			req.get('/api/v1/emp/10001')
			.expect(200)
			.expect((r: supertest.Response) => {
				assert.equal(r.body.emp_no, 10001);
				return r;
			})
			.end(done);
	});
});

