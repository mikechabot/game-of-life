import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import common from './scss/common.scss';
import style from './scss/style.scss';
import GameOfLife from './components/game-of-life';

// Needed for onTouchTap
// Can go away with react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
    <GameOfLife />,
    document.getElementById('game-of-life')
);