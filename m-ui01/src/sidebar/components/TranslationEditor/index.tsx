import * as React from 'react';
import * as Redux from 'redux';


import {TranslationList} from './TranslationList';
import TranslationSelect from './TranslationSelect';
import {Button} from '../Button';

import {TranslationEditorState} from '../../reducers/translationEditor';

const font12px = {fontSize:'12px'};
const paddingLeft =  {paddingLeft: '5px'};

const Line = (props: React.Props<void>) => (
	<div style={{
		display: 'flex',
		flexDirection: 'row',
		paddingBottom: '15px'
	}}>
		{props.children}
	</div>
);


interface TranslationEditorProps  extends  React.Props<void> {
  dispatch:Redux.Dispatch<TranslationEditorState>;
  state: TranslationEditorState;
}


export const TranslationEditor = (props: TranslationEditorProps) => {
  const {
    // dispatch,
    state
  } = props;
  const content = state.contentInfo.contentList[state.contentInfo.selectId];
  if (!content)  {
    return <div style={{
        padding: '5px'
      }}>
        <p>翻訳ファイルが見当たりません</p>
        <Button label={'翻訳ファイルの作成'}
          onClick={async () => {
            {/*let resp = await sendMessageToContent({
              callFunction: 'translateReady'
            });
            if (resp.responseType === 'translateReady') {
              this.fetchContent().then(() => (sidebar_render()));
            }*/}
          }}
        />
      </div>;
  }

	return (
		<div>
			<div style={paddingLeft} >
			<p style={font12px}> owner is {content.mine ? 'You' : 'other'}</p>
			<p style={font12px}> url: {content.url}</p>
			<p style={font12px}> created: {content.created}</p>
			</div>
			<TranslationSelect />
			<Line>
        <Button label={'アップロード登録'}
          onClick={() => (alert('未実装'))} />

        <Button label={'全体翻訳実行'} onClick={() => {

          {/*sendMessageToContent({
            callFunction: 'translateContent',
            content
          });*/}
        }} />

        <Button label={'新規翻訳作成'} onClick={async () => {
          {/*let resp = await sendMessageToContent({
            callFunction: 'newContent'
          });
          if (resp.responseType === 'success') {
            sidebar_render();
          }*/}
        }} />

			</Line>
			<TranslationList content={content} onChange={(index,pair)=>{
          console.log(`index = ${index},pair = ${JSON.stringify(pair)}`);

        }} />
		</div>);
};
