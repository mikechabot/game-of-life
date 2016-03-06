import { combineReducers } from 'redux';
import controls from './controls';
import timer from './timer';

export default combineReducers({
    timer,
    controls
});