import GameOfLife from './game-of-life';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        controls: state.controls,
        timer: state.timer
    }
}

const GameOfLifeContainer = connect(
    mapStateToProps
)(GameOfLife);

export default GameOfLifeContainer;