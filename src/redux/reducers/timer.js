import { DEFAULT_STATE } from '../../common/app-const';
import {
    START_TIMER,
    STOP_TIMER,
    TICK,
    CLEAR_GRID
} from '../actions';

const defaultState = DEFAULT_STATE.timer;

const Timer = (state = defaultState, action) => {
    switch (action.type) {
        case START_TIMER: {
            return {
                ...state,
                timer: action.timer,
                isRunning: true
            }
        }
        case STOP_TIMER: {
            return {
                ...state,
                isRunning: false
            }
        }
        case TICK: {
            return {
                ...state,
                ticks: ++state.ticks
            }
        }
        case CLEAR_GRID: {
            return {
                ...state,
                ticks: 0
            }
        }
        default: {
            return state;
        }
    }
}

export default Timer;