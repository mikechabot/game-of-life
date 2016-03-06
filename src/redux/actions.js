import {
    makeActionCreator,
    toggleActionCreator,
    startTimerActionCreator,
    stopTimerActionCreator
} from './action-creators';

export const SET_TICKS_PER_SECOND = 'SET_TICKS_PER_SECOND';
export const CLEAR_GRID = 'CLEAR_GRID';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const TICK = 'TICK';

export const setTicksPerSecond = makeActionCreator(SET_TICKS_PER_SECOND, 'value');

export function clearGrid() {
    return toggleActionCreator(
        CLEAR_GRID,
        'value'
    );
}

export function startMutation(tickInterval) {
    return startTimerActionCreator(tickInterval);
}

export function stopMutation() {
    return stopTimerActionCreator()
}