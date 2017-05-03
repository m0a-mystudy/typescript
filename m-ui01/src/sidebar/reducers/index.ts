import {combineReducers} from 'redux';
import {counter} from './count';
import {translationEditor} from './translationEditor';

export default combineReducers({
  counter,
  translationEditor
});


export const State = {

};
