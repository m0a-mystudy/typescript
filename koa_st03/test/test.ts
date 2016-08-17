import Calculator from '../src';
import * as assert from 'power-assert';
import * as Knex from 'knex';



describe('Calculator', () => {
	let subject: Calculator;

	beforeEach(function() {
		subject = new Calculator();
	});

	describe('#add', () => {
		it('should add two numbers together', () => {
			let result: number = subject.add(2, 3);
			assert(5 === result);
		});
	});
});

// describe('knexテスト', () => {
// 	let config = {
// 		client: 'mysql',
// 		connection: {
// 				user     : 'root',
// 				password : 'tx2d236dg',
// 				database : 'employees'
// 		}
// 	};
// 	let knex = Knex(config);
/*
[ { emp_no: 10001,
		birth_date: 1953-08-31T15:00:00.000Z,
		first_name: 'Georgi',
		last_name: 'Facello',
		gender: 'M',
		hire_date: 1986-06-25T15:00:00.000Z } ]
*/


	// it('基本操作の理解1', (done) => {
	// 	let select_config = {
	// 		table: 'employees',
	// 		select: [
	// 			'emp_no',
	// 			'birth_date',
	// 			'first_name',
	// 			'last_name',
	// 			'gender',
	// 			'hire_date'
	// 		]
	// 	};

	// 	knex.select(select_config.select).from(select_config.table).limit(1).then<any>(function(rows){
	// 		console.log(rows);
	// 		done();
	// 	});
	// });

	// it('基本操作の理解2', () => {
	// 	let select_config = {
	// 		table: 'departments',
	// 		select: [
	// 			'dept_no',
	// 			'dept_name'
	// 		]
	// 	};

	// 	return knex.select(select_config.select).from(select_config.table).where('dept_no', 'd005').then((rows) => {
	// 			console.log(rows);
	// 			return rows;
	// 	}).then((rows: Array<Object>) => {
	// 			assert.equal(rows.length, 1);
	// 	});
	// });

	describe('test04', () => {
		it('test04', () => {
			let tables = [
			'a',
			'b',
			'c'
			];

			let select_columns = {
			'a': ['a1', 'a2'],
			'b': ['b1', 'b2'],
			'c': [ 'c1', 'c2']
			};
			for (let table in tables) {
				console.log(select_columns[table]);
			}
		});
	});




