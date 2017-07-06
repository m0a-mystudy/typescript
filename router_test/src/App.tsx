import * as React from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import {connect} from 'react-redux';

import One from './components/one';
interface TestProps extends RouteComponentProps<{}> { 
  state: Object;
}
const Index = (props: RouteComponentProps<undefined>) => (<h1>index</h1>);
const About = (props: RouteComponentProps<undefined>) => (<h1>about</h1>);

const AccessReduxStore = (props: TestProps) => 
  (<h1>access to redux store{JSON.stringify(props.state)}</h1>);
const mapStateToProps = (state: {}, ownProps: TestProps): TestProps => {
  return {
    state,
    ...ownProps
  };
};

const ReduxAccessWithRouter = withRouter(connect(mapStateToProps)(AccessReduxStore));

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <One />
        <Router>
          <div>
          <a> <Link to={'/'} >Index</Link></a>
          <a> <Link to={'/about'} >about</Link></a>
          <a> <Link to={'/access'} >access</Link></a>
          <a> <Link to={'/one'} >one</Link></a>

          <Route exact={true} path={'/'} component={Index} />
          <Route  path={'/about'} component={About} />
          <Route  path={'/access'} component={ReduxAccessWithRouter} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
