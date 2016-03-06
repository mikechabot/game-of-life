import React from 'react';
import ReactDOM  from 'react-dom';

/**          Author: Mike Chabot
 *      Description: Scrollable flex container
 *  Default Element: See render()
 *            Props: See PropTypes
 */
const Scrollable = ({
    children
}) => (
    <div style={style.container}>
        <div style={style.content}>
            {children}
        </div>
    </div>
);

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 2
    },
    content: {
        overflow: 'auto',
        display: 'flex',
        flexGrow: 2
    }
}

Scrollable.propTypes = {
    children: React.PropTypes.node
};

export default Scrollable;