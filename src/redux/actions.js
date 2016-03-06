import {
    makeActionCreator,
    toggleActionCreator
} from './action-creators';

export const SET_ROWS = 'SET_ROWS';
export const SET_COLUMNS = 'SET_COLUMNS';
export const SET_TICKS_PER_SECOND = 'SET_TICKS_PER_SECOND';
export const START_MUTATION = 'START_MUTATION';
export const STOP_MUTATION = 'STOP_MUTATION';
export const NEXT_MUTATION = 'NEXT_MUTATION';
export const BUILD_GRID = 'BUILD_GRID';

export const setRows = makeActionCreator(SET_ROWS, 'value');
export const setColumns = makeActionCreator(SET_COLUMNS, 'value');
export const setTicksPerSecond = makeActionCreator(SET_TICKS_PER_SECOND, 'value');
export const startMutation = makeActionCreator(START_MUTATION);
export const stopMutation = makeActionCreator(STOP_MUTATION);
export const nextMutation = makeActionCreator(NEXT_MUTATION);

export function buildGrid() {
    return toggleActionCreator(
        BUILD_GRID,
        'value'
    );
}