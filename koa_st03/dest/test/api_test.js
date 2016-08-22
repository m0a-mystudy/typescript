"use strict";
const supertest = require('supertest');
const api_router_1 = require('../src/api_router');
const Koa = require('koa');
// import {CrudConfig} from '../src/interfaces/config';
const crudConfig = require('../src/config/crud');
function check01(resp) {
    //console.log('resp body = ', resp.body);
    if (typeof resp.body !== 'object') {
        throw new Error('not object');
    }
    // 	if (typeof resp.body !== 'array') {
    // 	throw new Error('not array');
    // }
    // if (!('emp_no' in resp.body) throw new Error('emp_no missing!')
    return resp;
}
describe('APIRouteテスト', () => {
    // let api_route = apiRoute(config, '/api/v1');
    let apiRouter = new api_router_1.ApiRouter(crudConfig, '/api/v1');
    let app = new Koa();
    // app.use(api_route.routes());
    app.use(apiRouter.routes());
    let req = supertest.agent(app.listen());
    it('get /emp', (done) => {
        req.get('/api/v1/emp')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(check01)
            .end(done);
    });
    it('get /emp?limit=12&offset=3', (done) => {
        req.get('/api/v1/emp?limit=12&offset=3')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('get /emp/:id', (done) => {
        req.get('/api/v1/emp/1')
            .expect(200)
            .expect(JSON.stringify({ id: 1 }), done);
    });
});
//# sourceMappingURL=api_test.js.map