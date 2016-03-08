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
            alive: false
        }
    }

    /**
     * Mutate the cell by one generation
     * See rules (https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
     * @param  {number} number of living neighbor cells
     */
    mutate(count) {
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.mutate) {
            this.mutate(
                nextProps.livingNeighborCount
            );
        }
        if (nextProps.clear) {
            this.setState({
                alive: false
            });
        }
    }

    onClick() {
        this.setState({
            alive: !this.state.alive
        });
    }

    render() {
        return (
            <td onClick={() => this.onClick()}
                style={this.state.alive ? style.alive : style.dead}
            />
        );
    }
}

const baseStyle = {
    backgroundColor: Colors.white,
    border: `1px solid ${Colors.grey400}`,
    cursor: 'pointer',
    width: 10,
    height: 10
}

const style = {
    alive: {
        backgroundColor: Colors.green500
    },
    dead: {
        ...baseStyle
    }
}

export default Cell;
