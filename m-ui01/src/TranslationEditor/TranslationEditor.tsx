
import { Content} from 'taiyaku-node';
import * as React from 'react';
import {TranslationCell} from './TranslationCell';
import TranslationSelect from './TranslationSelect';
import {Button} from './Button';

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
	content: Content;
}
export const TranslationEditor = (props: TranslationEditorProps) => {
	const content = props.content;
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
				<Button label={'アップロード登録'} />
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
