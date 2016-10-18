import * as supertest from 'supertest';
import {ApiRouter} from '../server/api_router';

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as http from 'http';
import * as assert from 'power-assert';
import * as Knex from 'knex';


describe('Koa.js基本機能確認テスト1', () => {

	let app = new Koa();
	app.use(ctx => ctx.body = 'hello?');
	let req = supertest.agent(app.listen());
	it('get test01 bodyチェック', (done) => {
		req.get('/sample1').expect('hello?', done);
	});
});



// import Calculator from '../src';
// import * as assert from 'power-assert';
// import * as Knex from 'knex';

let config = {
	client: 'mysql',
	debug: true,
	connection: {
			user     : 'root',
			password : 'root',
			database : 'employees'
	}
};
let knex = Knex(config);


describe('knexTest', () => {
/*
[ { emp_no: 10001,
		birth_date: 1953-08-31T15:00:00.000Z,
		first_name: 'Georgi',
		last_name: 'Facello',
		gender: 'M',
		hire_date: 1986-06-25T15:00:00.000Z } ]
*/
	it('基本操作の理解1', (done) => {

		let select_config = {
			table: 'employees',
		};

		knex.from(select_config.table).limit(1).then<any>(function(rows){
			// console.log(rows);
			done();
		});
	});

	// it('db insert test02', done => {
	// 		knex.transaction(trx => {
	// 			trx.max('emp_no as max_id').from('employees').then<any> (result => {
	// 				let max_id = result[0].max_id;
	// 				trx.insert({
	// 					emp_no: max_id + 1,
	// 					first_name: 'mak',
	// 					last_name: 'abe',
	// 					birth_date: '2001-10-03',
	// 					hire_date: '2009-10-03'
	// 				}).into('employees').then(result => {
	// 					console.log(result);
	// 				});
	// 			});
	// 		}).then(result => {
	// 			done();
	// 		});
	// });

	it('db insert test03', done => {
		knex.transaction( async function(trx) {
			let max_id = await trx.max('emp_no as max_id').from('employees').then(result => { return result[0].max_id; });
			console.log(`max_id = ${max_id}`);

			await trx.insert({
				emp_no: max_id + 1,
				first_name: 'mak',
				last_name: 'ab',
				birth_date: '2001-10-04',
				hire_date: '2009-10-04'
			}).into('employees');

			console.log('done');
			done();

		});
	});

});







