import {plus,minus} from '../jscode';


test('plus test',() => {
	
	expect(plus(1,2)).toBe(3);
	expect(minus(1,2)).toBe(-1);
});
