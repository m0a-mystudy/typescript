import * as ui from 'material-ui';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as Redux from 'redux';
import { CountState } from '../sidebar/reducers/count';
import { asyncCountDown, asyncCountUp } from '../sidebar/actions/count';


interface DebugProps extends React.Props<void> {
  dispatch: Redux.Dispatch<CountState>;
  state: CountState;
}

export default (props: DebugProps) => {
  const { dispatch, state } = props;
  console.log(`dispatch = ${dispatch}`);

  return (
    <div>
      <h2 >Debug目的</h2>
      <h3>count = {state.count} </h3>
      <ui.RaisedButton label={'countup'}
        onClick={()=>(dispatch(asyncCountUp()))}
        disabled={state.setCounting}
      />
      <ui.RaisedButton label={'countdown'}
        onClick={()=>(dispatch(asyncCountDown()))}
        disabled={state.setCounting}
        />
    </div>
  );
};
