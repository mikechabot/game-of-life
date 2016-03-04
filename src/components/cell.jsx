import React from 'react';

/**      Author: Mike Chabot
 *  Description: Represents a GoL cell
 */
class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alive: this.props.cell.alive
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.cell.alive !== this.state.alive) {
            this.setState({
                alive: nextProps.cell.alive
            })
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

Cell.propTypes = {
    cell: React.PropTypes.object.isRequired
};

export default Cell;