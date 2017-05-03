import * as t from 'taiyaku-node';
import { TransPair, toString, parseText, TaiyakuNode } from 'taiyaku-node';
import * as ui from 'material-ui';
import * as React from 'react';

import {Button} from '../../Button';


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
				paddingTop: '5px',
				paddingLeft: '15px'
			}}
		/>
	</div>
);



interface TranslationCellProps {
	pair: TransPair;
	index: number;
	onReflect?:(newPair:TransPair)=>void;
}

interface TranslationCellState {
	transText: string;
	newNode?: TaiyakuNode;
	errorText: string;
}


export class TranslationCell extends React.Component<TranslationCellProps, TranslationCellState> {
	constructor(props: TranslationCellProps) {
		super(props);
		let transText = props.pair.translation;
		if (transText) {
			this.state = {
				transText: toString(transText),
				errorText: ''

			};
		} else {
			this.state = {
				transText: '',
				errorText: ''
			};
		}

	}
	isEditing() {
		let props = this.props;
		return !(props.pair.translation && this.state.transText === toString(props.pair.translation));
	}
	hasError() {
		return this.state.errorText !== '';
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
						width: "500px"
					}
				}
				fullWidth={false}
				multiLine={true}
				errorText={this.state.errorText}
				onChange={(e: React.FormEvent<{}>, newValue: string) => {
					let parse = parseText(newValue, props.pair);
					if (parse.result) {
						this.setState({
							transText: newValue,
							newNode:parse.node,
							errorText: ''
						});
					} else {
						this.setState(Object.assign(this.state, {
							transText: newValue,
							errorText: parse.message
						}));
					}
					return;
				}}
			/>
			<CheckBoxLine>
				<Checkbox label={'翻訳対象'} checked={!props.pair.dontTranslate} />
				<Button label={'反映'}
					disabled={(!this.isEditing() || this.hasError())}
					onClick={
						()=>{
							{/*console.log(`in onclick ${this.state.newNode} ${props.onReflect}`);*/}

							if(this.state.newNode && props.onReflect){

								let newPair = Object.assign<TransPair,{}>(props.pair,{
									translation:this.state.newNode
								});
								props.onReflect(newPair);
							}
						}
					}
				/>
				<Button label={'リセット'}
					disabled={!this.isEditing()}
					onClick={
						() => {
							if (props.pair.translation) {
								this.setState({
									transText: toString(props.pair.translation),
									errorText: ''
								});
							}
						}
					}
				/>
			</CheckBoxLine>
		</ui.Card>);

	}
}
