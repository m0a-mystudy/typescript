// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './sidebar';
import { Provider } from 'react-redux';
import reducer from './sidebar/reducers';
// import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

// let store = createStore(counter,
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// );

  import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

// let store = createStore(counter,
// applyMiddleware(thunkMiddleware));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
