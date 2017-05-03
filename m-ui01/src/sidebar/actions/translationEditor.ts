import { Action } from './types';
// import { Dispatch } from 'redux';
import { Content } from 'taiyaku-node';


export function setContent(content: Content): Action {
  return {
    type: 'SET_CONTENT',
    content
  };
}

