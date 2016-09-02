"use strict";
const supertest = require('supertest');
const api_router_1 = require('../server/api_router');
const Koa = require('koa');
const assert = require('power-assert');
// import {CrudConfig} from '../server/interfaces/config';
const crudConfig = require('../server/config/crud');
describe('APIテスト', () => {
    // let api_route = apiRoute(config, '/api/v1');
    let apiRouter = new api_router_1.ApiRouter(crudConfig, '/api/v1');
    let app = new Koa();
    app.use(apiRouter.routes());
    let req = supertest.agent(app.listen());
    it('get /api/v1/emp', (done) => {
        req.get('/api/v1/emp')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((resp) => {
            assert.equal(resp.body.length, 10);
            return resp;
        })
            .end(done);
    });
    it('get /api/v1/emp?limit=12&offset=3', (done) => {
        req.get('/api/v1/emp?limit=12&offset=3')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((resp) => {
            assert.equal(resp.body.length, 12);
            return resp;
        })
            .end(done);
    });
    it('get /api/v1/emp/10001', (done) => {
        req.get('/api/v1/emp/10001')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((r) => {
            assert.equal(r.body.emp_no, 10001);
            return r;
        })
            .end(done);
    });
});
//# sourceMappingURL=api_test.js.map