import {
    START_TIMER,
    STOP_TIMER,
    TICK
} from './actions';

/**
 * Action creator generator that accepts a 'type' and a spread of keys.
 * Returns a function that can be used to generate action creators of
 * a given shape.
 *
 * Example usage:
 *
 * 		const actionType = 'UPDATE_FOO';
 * 		const updateFooAction = makeActionCreator(actionType, 'payload');
 *   	const updateFooBar = updateFooAction('bar');
 *   	const updateFooBaz = updateFooAction('baz');
 *
 * 		console.log(updateFooBar); --> { type: 'UPDATE_FOO', payload: 'bar' }
 *		console.log(updateFooBar); --> { type: 'UPDATE_FOO', payload: 'baz' }
 *
 * @param  {string} type        Redux action type
 * @param  {string} ...keys     Redux action property keys
 * @return {function}
 */
export function makeActionCreator(type, ...keys) {
    return function(...args) {
        let action = { type }
        keys.forEach((arg, index) => {
            action[keys[index]] = args[index]
        });
        return action;
    }
}

/**
 * Thunk action creator that toggles a boolean value
 * with two action.
 *
 * @param  {string}     type    Redux action type
 * @param  {boolean}    invert  If true, toggle from FALSE -> TRUE
 * @param  {number}     delay   Delay the toggle by N milliseconds (Default: 50)
 * @return {function}           Thunk action creator
 */
export const toggleActionCreator = (
    type,
    invert,
    delay
) => {
    return (dispatch, getState) => {
        dispatch(makeActionCreator(type, 'value')(!invert));
        setTimeout(() => {
            dispatch(makeActionCreator(type, 'value')(!!invert));
        }, delay || 50)
    }
}

const makeStartTimerActionCreator = () => {
    return makeActionCreator(START_TIMER, 'timer');
}

const makeStopTimerActionCreator = () => {
    return makeActionCreator(STOP_TIMER);
}

const makeTickActionCreator = () => {
    return makeActionCreator(TICK);
}

const shouldStartTimer = (state) => {
    if (!state.timer) return true;
    return !state.timer.isRunning;
}

/**
 * Thunk action creator to start a timer and schedule
 * a tick every N milliseconds
 *
 * @return {function}   Thunk action creator
 */
export const startTimerActionCreator = (
    ticksPerSecond
) => {
    return (dispatch, getState) => {
        if (shouldStartTimer(getState())) {

            // Schedule timer
            const timer = setInterval(() => {
                dispatch(makeTickActionCreator()())
            }, (1000 / ticksPerSecond));

            // Dispatch start timer
            dispatch(makeStartTimerActionCreator()(timer));
        }
    }
}

/**
 * Thunk action creator to stop a timer
  * @return {function}  Thunk action creator
 */
export const stopTimerActionCreator = () => {
    return (dispatch, getState) => {

        // Stop timer
        const timer = getState().timer;
        if (timer && timer.isRunning) {
            clearInterval(timer.timer);
        }

        // Dispatch stop timer
        dispatch(makeStopTimerActionCreator()());
    }
}
