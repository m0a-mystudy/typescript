import { Action } from '../actions/types';

export interface CountState {
  count: number;
}

const initCountState: CountState = {
  count: 0
};


export function counter(state: CountState = initCountState, action: Action) {
  switch (action.type) {
    case 'COUNT_UP':
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case 'COUNT_DOWN':
      return Object.assign({}, state, {
        count: state.count -1
      });
    default:
      return state;
  }
}
