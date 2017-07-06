import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect, DispatchProp } from 'react-redux';
import { createStore } from 'redux';

interface AppProps {
  state: string;
}
const App = (props: AppProps & DispatchProp<{}>) => {
  props.dispatch({type: 'test'});
  return (<h1>App ({props.state})</h1>);
};

const mapStateToProps = (state: string, ownProps: AppProps & DispatchProp<{}>): AppProps => {
  return {
    state,
    ...ownProps
  };
};

const ConnectedApp = connect(mapStateToProps)(App);
let store = createStore((state: string = '', action: {}) => ('sample state'));
ReactDOM.render(
  <Provider store={store} >
{
  // tslint:disable-next-line:max-line-length
  // error TS2322: Type '{}' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<AppProps, ComponentState>> & Readonly<{ ...'.
}
    <ConnectedApp /> 
    
  </Provider>,
  document.getElementById('root') as HTMLElement
);
