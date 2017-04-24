import * as t from 'taiyaku-node';
import {  TransPair } from 'taiyaku-node';
import * as ui from 'material-ui';
import * as React from 'react';


interface TranslationCellProps {
	pair: TransPair;
	index: number;
}


const CheckBoxLine = (props: React.Props<void>) => (
	<div style={{
		display: 'flex', 
		flexDirection: 'row',
		paddingBottom: '15px'
	}}>
		{props.children}
	</div>
);

interface CheckboxProps {
	label: string;
	checked: boolean;
}
const Checkbox = (props:CheckboxProps) => (

	<div style={{
		
	}}>
	<ui.Checkbox
      label={props.label}
      labelPosition="right"
	  checked={props.checked}
      style={{
		fontSize:"12px",
		width:`${30 * props.label.length}px`,
		paddingLeft:'15px'
	  }}
    />
	</div>
);

export const TranslationCell = (props: TranslationCellProps) => (
	<ui.Card style={{
		marginBottom: '10px'
	}}>
		<ui.CardHeader  subtitle={`No.${props.index + 1}`}
			style={{
				fontSize:'10px'
			}}
		 />
		 <ui.Divider />
		<ui.CardText style={{fontSize:"12px"}}>
			{t.toString(props.pair.baseTranslation)}
		</ui.CardText>
		<ui.Divider />
		<ui.TextField
			hintText={t.toString(props.pair.baseTranslation)}
			value={props.pair.translation? t.toString(props.pair.translation): ''}
			style={
					{
						fontSize:"12px",
						paddingLeft: "15px",
					}
				}
			fullWidth={true}
			multiLine={true}
		/>
		<CheckBoxLine>
			<Checkbox label={'翻訳対象'} checked={!props.pair.dontTranslate} />
			<ui.RaisedButton label={'反映'} />
		</CheckBoxLine>
	</ui.Card>
);

