import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Store from './Store';
import EventEmitter from './EventEmitter';
import ActionCreater from './Action';

let dispatcher = new EventEmitter();
let action = new ActionCreater(dispatcher);
let store = new Store(dispatcher);

interface AppState {
	count: number;
}
class App extends React.Component<void, AppState> {

	public tick() {
		action.countUp(this.state.count + 1);
		this.setState({
			count: store.getCount()
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.tick.bind(this)} >countUp </button>
				<p>
					Count: {this.state.count}
				</p>
			</div>
		);
	}


	constructor() {
		super();
		this.state = { count: 0 };

		store.on('CHNAGE', () => {
			this._onChange();
		});


	}


	private _onChange() {
		console.trace();
		this.setState({
			count: store.getCount()
		});
	}


}

// import App from './App';
// import './index.css';

ReactDOM.render(
	<App />,
	document.getElementById('root') as HTMLElement
);
