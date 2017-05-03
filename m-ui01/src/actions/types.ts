// import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

export type Action =
  {
    type: 'SYNC_COUNT_UP'
  } |
  {
    type: 'SYNC_COUNT_DOWN'
  } |
  {
    type: 'COUNT_UP_START'
  } |
  {
    type: 'COUNT_DOWN_START'
  }
  ;



export function countUp(): Action {
  return {
    type: 'SYNC_COUNT_UP'
  };
}

export function countDown(): Action {
  return {
    type: 'SYNC_COUNT_DOWN'
  };
}


export function countUpStart(): Action {
  return {
    type: 'COUNT_UP_START'
  };
}

export function countDownStart(): Action {
  return {
    type: 'COUNT_DOWN_START'
  };
}

export function asyncCountUp() {
  return (dispatch: Dispatch<Action>) => {
    dispatch(countUpStart());
    setTimeout(() => {
      dispatch(countUp());
    }, 1000);
  };
}


export function asyncCountDown() {
  return (dispatch: Dispatch<Action>) => {
    dispatch(countDownStart());
    setTimeout(() => {
      dispatch(countDown());
    }, 1000);
  };
}
