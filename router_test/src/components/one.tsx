import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { State } from '../reducers';
interface AppProps extends React.Props<State> {
    test: string;
}

const mapStateToProps = (state: State, ownProps: {}): AppProps => ({
    test: state.test,
    ...ownProps
});

const App = (props: AppProps & DispatchProp<{}>) => {
    props.dispatch({ type: 'test' });
    return (<h1> App test </h1>);
};
// class App extends React.Component<AppProps & DispatchProp<{}>, {}> {
//     render() {
//         this.props.dispatch({ type: 'test' });
//         return (<h1> App test {`${JSON.stringify(this.props)}`} </h1>);
//     }
// }
export default connect(mapStateToProps)(App);
