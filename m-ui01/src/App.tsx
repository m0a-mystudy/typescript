
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import * as React from 'react';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as ui from 'material-ui';
import { sample } from './pegjs.sample';
import { newContent } from 'taiyaku-node';
import { TranslationEditor } from './TranslationEditor';
import Debug from './Debug';
// import {  asyncCountUp, asyncCountDown } from './actions/count';
// import reducer from './reducers';
import {CountState} from './reducers/count';
import * as ReactRedux from 'react-redux';
// import * as Redux from 'redux';


// type ASYNC_ACTION = ((dispatch: Redux.Dispatch<Action>) => void);

interface AppProps extends React.Props<{}> {
  dispatch: any;
  counter:CountState;
};

function mapStateToProps(state: {counter: CountState}) {
  return {
    counter: state.counter
  };
}

class App extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }
  render() {
    let body = document.createElement('body');
    body.innerHTML = sample;
    let content = newContent('pegjs.org', body);
    const { dispatch, counter } = this.props;
    // let content = this.state.content;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <ui.Tabs initialSelectedIndex={2} >
          <ui.Tab label="翻訳編集" >
            <TranslationEditor content={content} />
          </ui.Tab>
          <ui.Tab label="翻訳リスト" >
            <div>
              <h2 >Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </ui.Tab>
          <ui.Tab label="設定" >
            <div>
              <Debug
                state={counter}
                dispatch={dispatch}
              />
            </div>
          </ui.Tab>
        </ui.Tabs>
      </MuiThemeProvider>);
  }

}

// export default App;
export default ReactRedux.connect(mapStateToProps)(App);
