import React from 'react';
import { connect } from 'react-redux';
import Colors from 'material-ui/lib/styles/colors';
import GridService from '../../services/grid-service';
import Ticks from '../controls/ticks';
import Cell from './cell';

/**      Author: Mike Chabot
 *	Description: Game of Life component
 */
class GameOfLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: []
        }
    }

    /**
     * Purposely calling forceUpdate() here instead of using setState() to store
     * the grid. This is because <Cell> components track state (i.e. alive/dead)
     * internally. However, we need to know about all <Cell> elements at the time
     * of rendering as each <Cell> must know about its immediate eight neighbors
     * in order to mutate to the next generation. As a result, at rendering we
     * reconcile 'this refs', which has hooks into each <Cell> component's
     * internal state, with each cell object in 'this.grid'.
     *
     * Once reconciled, we can obtain the neighbors of a given <Cell> and pass
     * them as props. Using this inforamtion, the <Cell> component then decides
     * whether to live on to the next generation, or die in the current one.
     * This decision is saved in the <Cell>'s internal state, which is once
     * again harvested during the next render() iteration.
     */
    componentDidMount() {
        this.grid = GridService.initializeGrid();
        this.forceUpdate();
    }

    renderGrid() {
        const grid = GridService.getReconciledGrid(this.grid, this.refs);
        return grid.map((rowColumns, index) => (
            <tr key={index}>
                {
                    rowColumns.map((cell, index) => (
                        <Cell
                            ref={`${cell.row}-${cell.col}`}
                            key={index}
                            cell={cell}
                            clear={this.props.clear}
                            livingNeighborCount={
                                GridService.getLivingNeighborCount(grid, cell)
                            }
                            mutate={this.props.isRunning}
                        />
                    ))
                }
            </tr>
        ));
    }

    renderTable() {
        return (
            <div>
                <table style={style.table}>
                    <tbody>
                        {
                            this.renderGrid()
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <div style={style.container}>
                <Ticks />
                {
                    this.grid
                        ?  this.renderTable()
                        : <span />
                }
            </div>
        )
    }
}

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    table: {
        tableLayout: 'fixed',
        borderCollapse: 'collapse'
    }
}

GameOfLife.propTypes = {
    isRunning: React.PropTypes.bool,
    ticks: React.PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        isRunning: state.timer.isRunning,
        ticks: state.timer.ticks,
        clear: state.controls.clearGrid
    }
}

export default connect(mapStateToProps)(GameOfLife);
