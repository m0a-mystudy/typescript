import Emitter from './EventEmitter';

export default class Store extends Emitter {
	private count = 0;
	constructor(dispacher: Emitter) {
		super();
		dispacher.on('countUp', this.onCountUp.bind(this));
	}

	public getCount() {
		return this.count;
	}
	public onCountUp(count: number): void {
		// override 
		this.count = count;
		this.emit('CHANGE', null);
	}
}