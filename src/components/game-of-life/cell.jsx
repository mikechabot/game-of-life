import React from 'react';
import _ from 'lodash';

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
        if (nextProps.mutate) {
            let living = _.filter(
                            nextProps.neighbors,
                            neighbor => neighbor && neighbor.alive
                         ).length;

            if (this.state.alive) {
                if (living <= 1 || living >= 4) {
                    this.setState({
                        alive: false
                    })
                }
            } else {
                if (living === 3) {
                    this.setState({
                        alive: true
                    })
                }
            }
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
        backgroundColor: '#448AFF'
    },
    dead: {
        ...baseStyle
    }
}

Cell.propTypes = {
    cell: React.PropTypes.object.isRequired
};

export default Cell;