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
        controls: state.controls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startMutation() {
            dispatch(startMutation());
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