
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import * as React from 'react';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as ui from 'material-ui';

import { TranslationEditor } from './components/TranslationEditor';
import { TranslationEditorState } from './reducers/translationEditor';

import Debug from '../Debug';
import { CountState } from './reducers/count';
import * as ReactRedux from 'react-redux';

import { sample } from '../pegjs.sample';
import { newContent } from 'taiyaku-node';
import {setContent} from './actions/translationEditor';


// type ASYNC_ACTION = ((dispatch: Redux.Dispatch<Action>) => void);

interface AppProps extends React.Props<{}> {
  dispatch: any;
  counter: CountState;
  translationEditor: TranslationEditorState;
};

function mapStateToProps(state: {
  counter: CountState,
  translationEditor: TranslationEditorState
}) {
  return {
    counter: state.counter,
    translationEditor: state.translationEditor
  };
}

class App extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    let body = document.createElement('body');
    body.innerHTML = sample;
    let content = newContent('pegjs.org', body);
    this.props.dispatch(setContent(content));

  }
  render() {
    const {
      dispatch,
      counter,
      translationEditor
     } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <ui.Tabs initialSelectedIndex={0} >
          <ui.Tab label="翻訳編集" >
            <TranslationEditor

              state={translationEditor}
              dispatch={dispatch}

            />
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
