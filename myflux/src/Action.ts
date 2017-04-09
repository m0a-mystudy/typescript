import Emitter from './EventEmitter';
import {Data} from './EventEmitter';

export default class ActionCreater {
	constructor(private dispatcher: Emitter) {
		
	}
	countUp(data: Data) {
		this.dispatcher.emit('countUp', data);
	}
}