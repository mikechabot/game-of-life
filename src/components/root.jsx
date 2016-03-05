import React from 'react';
import CustomTheme from '../common/app-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ControlsContainer from './controls/controls-container';
import GameOfLifeContainer from './game-of-life/game-of-life-container';
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
                <div>
                    <h1>Game of Life</h1>
                </div>
                <ControlsContainer />
                <GameOfLifeContainer />
            </div>

        );
    }
}

const style ={
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