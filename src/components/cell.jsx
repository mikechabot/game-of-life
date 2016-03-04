import React from 'react';

/**      Author: Mike Chabot
 *  Description: Represents a GoL cell
 */
class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alive: false
        }
    }

    onClick() {
        this.setState({
            alive: !this.state.alive
        });
    }

    render() {
        return (
            <td
                style={this.state.alive ? style.alive : style.dead}
                onClick={() => this.onClick()} />
        );
    }
}

const baseStyle = {
    backgroundColor: '#FFFFFF'
}

const style = {
    alive: {
        backgroundColor: 'red'
    },
    dead: {
        ...baseStyle
    }
}

Cell.propTypes = {};

export default Cell;