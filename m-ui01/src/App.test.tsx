// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './sidebar';
import { Provider } from 'react-redux';
import reducer from './sidebar/reducers';
import { createStore } from 'redux';

let store = createStore(reducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , div);
});
