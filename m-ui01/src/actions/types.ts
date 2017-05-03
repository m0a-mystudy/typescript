// import { ThunkAction } from 'redux-thunk';
// import { Dispatch } from 'redux';

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

