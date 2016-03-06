import {
    makeActionCreator,
    toggleActionCreator
} from './action-creators';

export const SET_TICKS_PER_SECOND = 'SET_TICKS_PER_SECOND';
export const START_MUTATION = 'START_MUTATION';
export const STOP_MUTATION = 'STOP_MUTATION';
export const NEXT_MUTATION = 'NEXT_MUTATION';
export const CLEAR_GRID = 'CLEAR_GRID';

export const setTicksPerSecond = makeActionCreator(SET_TICKS_PER_SECOND, 'value');
export const startMutation = makeActionCreator(START_MUTATION);
export const stopMutation = makeActionCreator(STOP_MUTATION);
export const nextMutation = makeActionCreator(NEXT_MUTATION);

export function clearGrid() {
    return toggleActionCreator(
        CLEAR_GRID,
        'value'
    );
}