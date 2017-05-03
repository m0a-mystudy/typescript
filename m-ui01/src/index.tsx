// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { counter } from './reducers';
import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

// let store = createStore(counter,
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// );

let store = createStore(counter,
applyMiddleware(thunkMiddleware));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
