import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import CustomTheme from '../common/app-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ControlsContainer from './controls/controls-container';
import GameOfLife from './game-of-life/game-of-life';
import Scrollable from './common/scrollable';
import { connect } from 'react-redux';
import _ from 'lodash';

/**      Author: Mike Chabot
 *  Description: Root component
 */
 class Root extends React.Component {

    /**
     * Apply a custom theme to material-ui
     * @return {object}
     */
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
                  <GameOfLife />
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
        display: 'block',
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

export default connect()(Root);
