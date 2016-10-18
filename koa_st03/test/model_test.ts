import * as assert from 'power-assert';
import * as model from '../server/model';

describe('modelテスト', () => {

	it('index', () => {
		return model.index('emp').then(result => {
			// console.log(result);
			assert.equal(result.length, 10);
			return result;
		});
	});

	it('index limit 100, offset 10', () => {
		return model.index('emp', 100, 10).then(result => {
			// console.log(result);
			assert.equal(result.length, 100);
			return result;
		});
	});

	it('view', () => {
		return model.view('emp', 10001).then(result => {
			// console.log(result);
			// console.log(process.env.NODE_ENV || 'production');
			assert.equal(result.emp_no, 10001);
			return result;
		});
	});

	let pk_id_test = 500080;
it(`if exist ${pk_id_test} then delete it.`, () => {
		return model.view('emp', pk_id_test).then(result => {
			console.log('in model.view');
			if (result) {
				return model.remove('emp', pk_id_test);
			}
			return null;
		});
	});


	it('create', () => {
		return model.create('emp', {
			emp_no: pk_id_test,
			first_name: 'makoto',
			last_name: 'abe',
			birth_date: '2001-10-03',
			hire_date: '2009-10-03'
		});
	});

	it('update', () => {
		return model.update('emp', pk_id_test, {
			first_name: 'makoto(update)'
		}).then(result => {
			console.log('in update test');
			console.log(result);
			return result;
		}).catch(err => {
			console.log(err);
		});
	});

	it('update data select', () => {
		return model.view('emp', pk_id_test).then( result => {
			console.log(result);
			return result;
		});
	});

	it('delete', () => {
		return model.remove('emp', pk_id_test);
	});


});






