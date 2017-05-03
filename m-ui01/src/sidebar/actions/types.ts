// import { ThunkAction } from 'redux-thunk';
// import { Dispatch } from 'redux';
import {Content} from 'taiyaku-node';

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
  } |
  //コンテンツ設定
  {
    type: 'SET_CONTENT';
    content: Content;
  }|
  //コンテンツ選択
  {
    type: 'SELECT_CONTENT_ID';
    id: string;
  }
  ;

