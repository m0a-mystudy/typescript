import * as ui from 'material-ui';
import * as React from 'react';


interface ButtonProps {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
}

export const Button = (props: ButtonProps) => (
	<ui.RaisedButton
		label={props.label}
		onClick={props.onClick}
		disabled={props.disabled}
		style={{
			marginLeft: '5px'
		}}
	/>
);
