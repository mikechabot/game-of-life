import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
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

        if (nextProps.mutate === true) {

            // Get living count
            const count = _.filter(
                nextProps.neighbors,
                neighbor => neighbor && neighbor.alive
            ).length;

            if (this.state.alive) {
                if (count <= 1 || count >= 4) {
                    this.setState({
                        alive: false
                    })
                }
            } else {
                if (count === 3) {
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
    backgroundColor: Colors.white
}

const style = {
    alive: {
        backgroundColor: Colors.green500
    },
    dead: {
        ...baseStyle
    }
}

Cell.propTypes = {
    cell: React.PropTypes.object.isRequired
};

export default Cell;