import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import CustomTheme from '../common/app-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ControlsContainer from './controls/controls-container';
import GameOfLifeContainer from './game-of-life/game-of-life-container';
import Scrollable from './common/scrollable';
import { connect } from 'react-redux';
import _ from 'lodash';

/**      Author: Mike Chabot
 *  Description: Root component
 */
class Root extends React.Component {
    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(CustomTheme),
        };
    }
    render() {
        return (
            <div style={style.container}>
                <span style={style.title}>
                    Game of Life
                </span>
                <ControlsContainer />
                <Scrollable>
                    <GameOfLifeContainer />
                </Scrollable>
            </div>

        );
    }
}

Root.childContextTypes = {
    muiTheme: React.PropTypes.object
}

const style = {
    title: {
        display: 'inline-block',
        marginTop: 10,
        color: Colors.grey700,
        fontSize: '200%',
        fontWeight: 400
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    }
}

const mapStateToProps = (state) => {
    return {
        ticks: state.controls.ticks
    }
}

export default connect()(Root);