import Controls from './controls';
import { connect } from 'react-redux';
import {
    setRows,
    setColumns,
    setTicksPerSecond,
    startMutation,
    stopMutation,
    nextMutation,
    buildGrid
} from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        controls: state.controls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRows(numRows) {
            dispatch(setRows(numRows))
        },
        setColumns(numColumns) {
            dispatch(setColumns(numColumns))
        },
        setTicksPerSecond(tps) {
            dispatch(setTicksPerSecond(tps));
        },
        startMutation() {
            dispatch(startMutation());
        },
        stopMutation() {
            dispatch(stopMutation());
        },
        nextMutation() {
            dispatch(nextMutation());
        },
        buildGrid() {
            dispatch(buildGrid());
        }
    }
}

const ControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);

export default ControlsContainer;