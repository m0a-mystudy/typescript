import { combineReducers } from 'redux';

function test(state: string = 'test', action: {}) {
    return state;
}
export interface State {
    test: string;
}
export default combineReducers({
    test
});
