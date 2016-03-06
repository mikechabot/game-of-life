import { DEFAULT_STATE } from '../../common/app-const';
import {
    SET_TICKS_PER_SECOND,
    CLEAR_GRID
} from '../actions';

const defaultState = DEFAULT_STATE.controls;

const Controls = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TICKS_PER_SECOND: {
            return {
                ...state,
                tps: Math.floor(action.value)
            }
        }
        case CLEAR_GRID: {
            return {
                ...state,
                clearGrid: action.value
            }
        }
        default: {
            return state;
        }
    }
}

export default Controls;