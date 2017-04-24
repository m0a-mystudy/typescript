import * as t from 'taiyaku-node';
import { TransPair, toString } from 'taiyaku-node';
import * as ui from 'material-ui';
import * as React from 'react';




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
const Checkbox = (props: CheckboxProps) => (

	<div style={{

	}}>
		<ui.Checkbox
			label={props.label}
			labelPosition="right"
			checked={props.checked}
			style={{
				fontSize: "12px",
				width: `${30 * props.label.length}px`,
				paddingLeft: '15px'
			}}
		/>
	</div>
);

interface TranslationCellProps {
	pair: TransPair;
	index: number;
}

interface TranslationCellState {
	transText: string;
}



export class TranslationCell extends React.Component<TranslationCellProps, TranslationCellState> {
	constructor(props: TranslationCellProps) {
		super(props);
		let transText = props.pair.translation;
		if (transText) {
			this.state = {
				transText: toString(transText)
			};
		} else {
			this.state = {
				transText: ''
			};
		}

	}
	render() {
		let props = this.props;
		return (<ui.Card style={{
			marginBottom: '10px'
		}}>
			<ui.CardHeader subtitle={`No.${props.index + 1}`}
				style={{
					fontSize: '10px'
				}}
			/>
			<ui.Divider />
			<ui.CardText style={{ fontSize: "12px" }}>
				{t.toString(props.pair.baseTranslation)}
			</ui.CardText>
			<ui.Divider />
			<ui.TextField
				hintText={t.toString(props.pair.baseTranslation)}
				value={this.state.transText}
				style={
					{
						fontSize: "12px",
						paddingLeft: "15px",
					}
				}
				fullWidth={true}
				multiLine={true}
				onChange={(e: React.FormEvent<{}>, newValue: string) => {
					this.setState(Object.assign(this.state, {
						transText: newValue
					}));
					return;
				}}
			/>
			<CheckBoxLine>
				<Checkbox label={'翻訳対象'} checked={!props.pair.dontTranslate} />
				<ui.RaisedButton label={'反映'} />
				<ui.RaisedButton label={'リセット'}
					onClick={
						() => {
							if (props.pair.translation) {
								this.setState({
									transText: toString(props.pair.translation)
								});
							}
						}
					}
				/>
			</CheckBoxLine>
		</ui.Card>);

	}
}
