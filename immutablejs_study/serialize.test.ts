import { Record } from 'immutable';


interface AI {
	sample: string;
	num: number;
}

class A extends Record(<AI>{
	sample: '',
	num: 12
}) implements AI {
	sample: string;
	num: number;
	// constructor({ s, n }: { s: string, n: number }) {
	// 	super({ sample: s, num: n })
	// }
	static from({ s, n }: { s: string, n: number }) {
		return new A(<AI>{
			sample: s,
			num: n
		})
	}
}

test('constructor test', () => {
	let a1 = A.from({ s: 's', n: 42 });
	let a2 = new A({ sample: 's', num: 42 });
	expect(a1).toEqual(a2);
})