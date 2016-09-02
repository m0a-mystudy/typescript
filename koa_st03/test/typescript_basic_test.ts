import * as assert from 'power-assert';

describe('TypeScript仕様チェック', () => {
	it('仕様確認1', (done) => {
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

	it('宣言確認1', done => {
		const str: string = 'is const.';
		let num: number;
		let bool: boolean;

		let func: Function;
		let obj: any;

		// str = 1;
		assert.equal(str, 'is const.');
		done();
	});

	it('class宣言', done => {
		class Base {
			numA: number;
			strA = 'string';
			public numB: number;
			private numC: number;
			protected numD: number;

			static numA: number;
			public static numB: number;
			private static numC: number;
			protected static numD: number;

			constructor(boolA: boolean,
				public boolB: boolean,
				private boolC: boolean,
				protected boolD: boolean) {}

			// method
			hello(word: string): string {
				return `Hello, ${word}`;
			}

			_date: Date;
			get dateA(): Date {
				return this._date;
			}
			set dateA(value: Date) {
				this._date = value;
			}
		}

		const obj = new Base(true, false, true, false);
		obj.numA;
		obj.strA;
		obj.numB;
		// obj.numC;
		// obj.numD;
		assert.equal(obj.hello('TypeScript'), 'Hello, TypeScript');
		obj.dateA = new Date();
		obj.dateA;

		done();
	});
});


describe('仕様確認2', () => {
	it('overload', done => {
		let obj: {
			(word?: string): string | number;
		};
		obj = (word?: string) => {
			if (typeof word === 'string') {
				return `Hello, ${word}`;
			}
			return 42;
		};
		done();
	}); //it overload
	it('Generic Types', done => {
		let strArray = ['a', 'b', 'c'];
		let numArray: Array<number> = [1, 2, 3];

		strArray.forEach(v => v.charAt(0));
		numArray.forEach(v => v.toFixed(2));
		done();
	}); //Generic Types

	it('tuple', done => {
		function zip<T1, T2>(v1: T1, v2: T2): [T1, T2] {
			return [v1, v2];
		}

		let tuple =  zip('str', {hello: (): string => 'Hello!'});
		tuple[0].charAt(1);
		tuple[1].hello();
		done();

	});


});