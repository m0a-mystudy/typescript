
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import * as React from 'react';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import * as ui from 'material-ui';


import { sample } from './pegjs.sample';

import { newContent, Content } from 'taiyaku-node';
import {TranslationEditor} from './TranslationEditor';


/*
let myTabs = (
  <ui.Tabs>
    <ui.Tab label="item 1" />
    <ui.Tab label="item 2" />
  </ui.Tabs>
);*/
const styles: React.CSSProperties = {
  headline: {
    fontSize: 14,
    paddingTop: 12,
    marginBottom: 12,
    fontWeight: 40,
  },
};




interface AppState {
  content: Content;
}
class App extends React.Component<{}, AppState> {

  constructor() {
    super();
    let body = document.createElement('body');
    body.innerHTML = sample;

    let content = newContent('pegjs.org', body);
    this.state = { content };

  }


  render() {
    let content = this.state.content;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <ui.Tabs>
          <ui.Tab label="翻訳編集" >
            <TranslationEditor  content={content}/>
          </ui.Tab>
          <ui.Tab label="翻訳リスト" >
            <div>
              <h2 style={styles.headline}>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </ui.Tab>
          <ui.Tab
            label="設定"
            data-route="/home"
            /*onActive={handleActive}*/>
            <div>
              <h2 style={styles.headline}>Tab Three</h2>
            </div>
          </ui.Tab>
        </ui.Tabs>

      </MuiThemeProvider>);
  }

}

export default App;
