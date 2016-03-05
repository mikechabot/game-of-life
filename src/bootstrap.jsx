import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import common from './scss/common.scss';
import style from './scss/style.scss';
import configureStore from './redux/store/configure-store';
import { DEFAULT_STATE } from './common/app-const';
import Root from './components/root';

// Needed for onTouchTap
// Can go away with react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore(DEFAULT_STATE);

ReactDOM.render(
    <Provider store={store}><Root /></Provider>,
    document.getElementById('game-of-life')
);