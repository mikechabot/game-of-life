import {
    START_TIMER,
    STOP_TIMER,
    TICK
} from './actions';



/**
 * To reduce boilerplate code, we can utilize
 * this helper function that generates action
 * creators based on input arguments
 *
 *   Example: const DO_STUFF = 'DO_STUFF';
 *            const myAction = makeActionCreator(DO_STUFF, 'data');
 *            myAction(123); --> { type: "DO_STUFF", data: 123 }
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
 * Thunk action creator that dispatches two events,
 * effectively toggling from true to false after a
 * provided timeout value
 * @param  {string}     type
 * @param  {key}        key
 * @param  {boolean}    invert
 * @return {function}
 */
export const toggleActionCreator = (
    type,
    key,
    invert
) => {
    return (dispatch, getState) => {
        dispatch(makeActionCreator(type, key)(!invert));
        setTimeout(() => {
            dispatch(makeActionCreator(type, key)(!!invert));
        }, 50)
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
 * @return {function}                   Return thunk action creator
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
  * @return {function}           Return thunk action creator
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