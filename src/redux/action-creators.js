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
 * @param  {number}     timeout
 * @param  {boolean}    invert
 * @return {function}
 */
export const toggleActionCreator = (
    type,
    key,
    timeout,
    invert
) => {
    return (dispatch, getState) => {
        // Dispatch request action to notify UI
        dispatch(makeActionCreator(type, key)(!invert));
        setTimeout(() => {
            dispatch(makeActionCreator(type, key)(!!invert));
        }, timeout)
    }
}