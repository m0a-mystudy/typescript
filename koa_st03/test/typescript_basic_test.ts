	describe('TypeScript仕様チェック', () => {
		it('宣言方法確認1', (done) => {
			let tables = [
			'a',
			'b',
			'c'
			];

			interface Columns {
				[idx: string]: string[];
			}
			let select_columns: Columns = {
			'a': ['a1', 'a2'],
			'b': ['b1', 'b2'],
			'c': [ 'c1', 'c2']
			};
			for (let table of tables) {
				// console.log(select_columns[table]);
			}
			done();
		});
	});