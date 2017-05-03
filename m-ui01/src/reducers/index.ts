import { Action } from '../actions/types';

export interface CountState {
  count: number;
  setCounting: boolean;
}

const initCountState: CountState = {
  count: 0,
  setCounting: false
};


export function counter(state: CountState = initCountState, action: Action) {
  switch (action.type) {
    case 'SYNC_COUNT_UP':
      return Object.assign({}, state, <CountState>{
        count: state.count + 1,
        setCounting:false
      });
    case 'SYNC_COUNT_DOWN':
      return Object.assign({}, state, <CountState>{
        count: state.count -1,
        setCounting:false
      });
    case 'COUNT_UP_START':
    case 'COUNT_DOWN_START':
      return Object.assign({}, state, <CountState>{
        count: state.count,
        setCounting: true
      });
    default:
      return state;
  }
}
