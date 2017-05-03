//

// import { Content} from 'taiyaku-node';
import * as React from 'react';
import {TranslationCell} from './TranslationCell';
import TranslationSelect from './TranslationSelect';
import {Button} from './Button';
import * as Redux from 'redux';

// import { ContentInfo } from '../../storage';

import {TranslationEditorState} from '../../reducers/translationEditor';



const Line = (props: React.Props<void>) => (
	<div style={{
		display: 'flex',
		flexDirection: 'row',
		paddingBottom: '15px'
	}}>
		{props.children}
	</div>
);


interface TranslationEditorProps  extends  React.Props<{}> {
  dispatch:Redux.Dispatch<TranslationEditorState>;
  state: TranslationEditorState;
	// contentInfo: ContentInfo;
}
export const TranslationEditor = (props: TranslationEditorProps) => {
  const {
    dispatch,
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
console.log(dispatch);

	return (
		<div>
			<div style={{
				paddingLeft: '5px'
			}}>
			<p style={{fontSize:'12px'}}>owner is {content.mine ? 'You' : 'other'}</p>
			<p style={{fontSize:'12px'}}> url: {content.url}</p>
			<p style={{fontSize:'12px'}}> created: {content.created}</p>
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
			<div>
				{
					content.pairs.map(pair =>
					<TranslationCell
						pair={pair}
						index={content.pairs.indexOf(pair)}
						key={`${content.pairs.indexOf(pair)}:${pair.prevHash}`}
						onReflect={(newPair)=>{
							console.log(`newPair = ${JSON.stringify(newPair)}`);
						}}
					/>)
				}
			</div>
		</div>);
};
