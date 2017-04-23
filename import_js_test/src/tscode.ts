import {plus,minus} from './jscode';


export function mul(x:number,y:number):number {
	let sum =0;
	for (let i = 0; i < y; i++) {
		sum+=x;
	}
	return sum;
}

