import React from 'react';

/**      Author: Mike Chabot
 *	Description: Scrollable flex container
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
        width: '100%'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        overflow: 'auto'
    }
}

Scrollable.propTypes = {
    children: React.PropTypes.node
};

export default Scrollable;
