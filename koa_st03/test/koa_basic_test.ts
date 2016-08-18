import * as supertest from 'supertest';
import {apiRoute, TableConfig} from '../src/api_route';

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as http from 'http';
import * as assert from 'power-assert';

describe('Koa.js基本機能確認テスト1', () => {

	let app = new Koa();
	app.use(ctx => ctx.body = 'hello?');
	let req = supertest.agent(app.listen());
	it('get test01 bodyチェック', (done) => {
		req.get('/sample1').expect('hello?', done);
	});
});




describe('Koa.js基本機能確認テスト2', function() {

	it('routing check', function(done) {
		let app = new Koa();
		let router = new Router();

		router.get('/sample/:id', function(ctx) {
			// console.log('in router.get?..');
			ctx.body = `id = ${ctx.params.id}`;
			// console.log(`ctx.params?? = ${ctx.params.id}`);
			// return next();
		});
		app.use(router.routes());

		let req = supertest(http.createServer(app.callback()));
		req.get('/sample/1').expect('id = 1').end((err) => {
			if (err) return done(err);
			done();
		});
	});
});

