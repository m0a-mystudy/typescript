import * as Koa from 'koa';
import {ApiRouter} from './api_router';
import * as crudConfig from './config/crud';


const app = new Koa();
const router = new ApiRouter(crudConfig, '/api/v1');
app.use(router.routes());


if (! module.parent) {
	app.listen(3000);
}

