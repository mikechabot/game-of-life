import Controls from './controls';
import { connect } from 'react-redux';
import {
    startMutation,
    stopMutation,
    setTicksPerSecond,
    clearGrid
} from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        isRunning: state.timer.isRunning,
        tps: state.controls.tps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startMutation(tickInterval) {
            dispatch(startMutation(tickInterval));
        },
        stopMutation() {
            dispatch(stopMutation());
        },
        setTicksPerSecond(tps) {
            dispatch(setTicksPerSecond(tps));
        },
        clearGrid() {
            dispatch(clearGrid());
        }
    }
}

const ControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);

export default ControlsContainer;
