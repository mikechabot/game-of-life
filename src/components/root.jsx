import React from 'react';
import CustomTheme from '../common/app-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ControlsContainer from './controls/controls-container';
import GameOfLifeContainer from './game-of-life/game-of-life-container';
import Scrollable from './common/scrollable';
import _ from 'lodash';

/**      Author: Mike Chabot
 *  Description: GameOfLife application
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
                <div style={style.title}>Game of Life</div>
                <div>
                    <ControlsContainer />
                </div>
                <Scrollable>
                    <GameOfLifeContainer />
                </Scrollable>
            </div>

        );
    }
}

const style = {
    title: {
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

Root.childContextTypes = {
    muiTheme: React.PropTypes.object
}

Root.propTypes = {};

export default Root;