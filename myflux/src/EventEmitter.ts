
export type Data = Object | null;
type Handler = (data: Data) => void;

export default class EventEmitter {
	
	constructor(private handlers: {[key: string]: Handler[]} = {}) {}

	on(type: string, handler: Handler) {
		if (typeof this.handlers[type] === 'undefined') {
			this.handlers[type] = [];
		}
		this.handlers[type].push(handler);
	}
	emit(type: string, data: Data) {
		let handlers = this.handlers[type] || [];
		for (let handler of handlers) {
			handler.call(this, data);
		}
	}
}