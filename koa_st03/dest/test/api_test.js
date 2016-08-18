"use strict";
const supertest = require('supertest');
const api_router_1 = require('../src/api_router');
const Koa = require('koa');
describe('APIRouteテスト', () => {
    let config = {
        tables: [
            {
                targetName: 'emp',
                tableName: 'employee'
            },
        ],
        list: {
            'emp': [],
        },
        show: {
            'emp': [],
        },
    };
    // let api_route = apiRoute(config, '/api/v1');
    let apiRouter = new api_router_1.ApiRouter(config, '/api/v1');
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
            .expect(JSON.stringify({ id: 1 }), done);
    });
});
//# sourceMappingURL=api_test.js.map