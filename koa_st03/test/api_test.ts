import * as supertest from 'supertest';
import * as app from '../src/app';
import * as Koa from 'koa';


import * as assert from 'power-assert';

describe('sample1', () => {
	let req = supertest.agent(app.listen());
	it('test1', (done) => {
		req.get('/').expect(401, done);
	});
});

describe('api test', () => {
	it('get employees', () => {

	});
});
