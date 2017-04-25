import * as React from 'react';
import * as ui from 'material-ui';

export default class TranslationSelect extends React.Component<{},{}> {
	render(){
		return (
			<div>
				<ui.SelectField
				>
				<ui.MenuItem value={1} primaryText="sample1" />
				<ui.MenuItem value={2} primaryText="sample2" />
				<ui.MenuItem value={3} primaryText="sample3" />
					
				</ui.SelectField>
			</div>
		);
	}
}