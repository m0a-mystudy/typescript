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
});






