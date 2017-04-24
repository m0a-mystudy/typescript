
import { Content} from 'taiyaku-node';
import * as React from 'react';
import {TranslationCell} from './TranslationCell';



interface TranslationEditorProps  extends  React.Props<{}> {
	content: Content;
}
export const TranslationEditor = (props: TranslationEditorProps) => {
	const content = props.content;
	return (
		<div>
			<p>owner is {content.mine ? 'You' : 'other'}</p>
			<p> url: {content.url}</p>
			<p> created: {content.created}</p>
			<div>
				{
					content.pairs.map(pair => 
					<TranslationCell 
					pair={pair} 
					index={content.pairs.indexOf(pair)} 
					key={`${content.pairs.indexOf(pair)}:${pair.prevHash}`}
					/>)
				}
			</div>
		</div>);
};
